import React from "react";
import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS first


import PokemonList from "./components/PokemonList";
import Type from "./components/Type";
import AfterSearch from "./components/AfterSearch";
import dummy from "./components/dummy";
import MovesTest from "./components/MovesTest";
// import PokemonDescription from "./components/PokemonDescription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./assets/pokemon.svg";
function App() {
  return (
    <Router>
      <div className="App">
        <br />
        {/* <header className="App-header">
        <img src={Logo} alt="Pokemon Logo" className="pokemon-logo" />
      </header> */}
        {/* <PokemonList /> */}
        <Routes>
          <Route path="/" element={<PokemonList />} /> 
          <Route path="/type" element={<Type />} /> 
          <Route path="/afterSearch/:type" element={<AfterSearch />} /> 
          <Route path="/afterSearch" element={<AfterSearch />} /> 
          <Route path="/dummy" element={<dummy />} /> 
          <Route path="/moves" element={<MovesTest />} /> 
          {/* <Route path="/pokemon_desc" element={<PokemonDescription />} />  */}
        </Routes>
        <br />
      </div>
    </Router>
  );
}

export default App;
