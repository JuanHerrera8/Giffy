import React, { useState } from "react";
import {  useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import './Home.css'


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
      <div>  
        <h3 className="App-title">Última busqueda</h3>
          <ListOfGifs gifs={gifs} />
        <div>
          <TrendingSearches />
        </div>
      </div>
    </>
  )
};

export default Home;
