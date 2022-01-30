import React, { useCallback } from "react";
import {  useLocation } from "wouter"
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import './Home.css'
import SearchForm from "components/SearchForm";


const Home = () => {
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()


  const handleSubmit = useCallback(({keyword}) => {
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  },[pushLocation])

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div> 
        <div>
          <h3 className="App-title">Última busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div> 
        <div>
          <TrendingSearches />
        </div>
      </div>
    </>
  )
};

export default Home;
