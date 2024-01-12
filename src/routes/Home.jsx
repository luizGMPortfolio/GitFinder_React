import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Search from "../components/Search";
import Repositorios from "../components/Respositorio";
import ItemRepositorio from "../components/ItemRepositorio";


function Home() {

    const [user, setUser] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState([]);
    


    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json();
        const userRepos = await fetch(newUser.repos_url);
        const repositorios = await userRepos.json();
        setRepos(repositorios)
        setCurrentUser(newUser)
    }




    return (
        <div className="home">
            <div className="busca">
                <div className="sup">
                    <h2>Busque por um usuário:</h2>
                </div>
                <div className="inf">
                    <p>Conheça seus melhores repositórios</p>
                    <div>
                        <input
                            type="text"
                            placeholder="@usuario"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <button onClick={handleGetData}><BsSearch /></button>
                    </div>
                </div>
            </div>
            <div className="resposta">
                {currentUser && <Search img={currentUser.avatar_url} name={currentUser.name} username={`@${currentUser.login}`.toLocaleLowerCase()} description={currentUser.bio} />}
            </div>

            <Repositorios>
                {repos.map(rep => (
                    <ItemRepositorio
                        key={rep.id}
                        url={rep.html_url}
                        nameProject={rep.name}
                        descProject={rep.description}
                        languages={rep.language ? rep.language : "MarkDown"}
                    />))}
            </Repositorios>
        </div>

    )
}

export default Home