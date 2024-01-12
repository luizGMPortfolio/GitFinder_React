import React from 'react'

function Search(props) {
  return (
    <div className='search'>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <h2>{props.username}</h2>
        <p>{props.description}</p>
        <p></p>
    </div>
  )
}

export default Search