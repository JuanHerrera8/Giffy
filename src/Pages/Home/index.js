import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import './Home.css'

const POPULAR_GIFS = ["Matriz", "Venezuela", "Chile", "Colombia", "Ecuador"]

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Busca tu gif aquí" onChange={handleChange} type="text" value={keyword} />
        <button>Gifea</button>
      </form>
      <h3 className="App-title">Última busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs Mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;
