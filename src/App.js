import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import SearchResults from "./Pages/SearchResults";
import Icono from "./components/Logo";
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from "./context/GifsContext";

export default function App() {
  return (
    <StaticContext.Provider value={{name: 'JuanHerrera', suscribeteAlcanal: true}}>
      <div className="App">
        <section className="App-content">
          <Icono/>
          <GifsContextProvider>
          <Route  
            component={Home}
            path="/" />
          <Route 
            component={SearchResults} 
            path="/search/:keyword" />
            <Route  
            component={Detail}
            path="/gif/:id" />
             </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
