

export default function ItemRepositorio(props) {
    return (
        <div className='Irepositorio'>
            <div className="titulo">
                <a href={props.url} target="_blank">
                    <h3>{props.nameProject}</h3>
                </a>
            </div>
            <div className="discrição">
                <p>{props.descProject? props.descProject:"sem Descrição"}</p>
            </div>
            <div className="linguagem">
                <i class="fa-solid fa-code"></i>
                <p>{props.languages}</p>
            </div>
        </div>
    )
}