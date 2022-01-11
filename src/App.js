import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import SearchResults from "./Pages/SearchResults";
import Icono from "./components/Logo";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Icono/>
        <Route  
          component={Home}
          path="/" />
        <Route 
          component={SearchResults} 
          path="/search/:keyword" />
           <Route  
          component={Detail}
          path="/gif/:id" />
      </section>
    </div>
  );
}
