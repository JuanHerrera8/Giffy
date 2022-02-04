import React from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import './Home.css'
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";


const Home = () => {
  
  const {gifs} = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header>
      <SearchForm />
      </header>
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
