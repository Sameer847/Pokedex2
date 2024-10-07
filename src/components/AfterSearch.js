import React from "react";
import PokemonFinalCard from "./PokemonFinalCard";
import "./PokemonFinalCard.css";
import "./Type.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to get passed data
import { useTheme } from "../components/ThemeContext";
import back from "../assets/back_arrow.png"; // Importing assets
import pokeball from "../assets/pokeball.png";

const AfterSearch = ({ types = [] }) => {
  const { state } = useLocation(); // Access passed state (Pokémon details)
  const { pokemon } = state || {}; // Destructure passed Pokémon data
  const { toggleTheme } = useTheme(); // Use context to handle theme toggle

  const typeText = [
    { name: "BUG", className: "btn-bug1" },
    { name: "DARK", className: "btn-dark2" },
    { name: "DRAGON", className: "btn-dragon3" },
    { name: "ELECTRIC", className: "btn-electric4" },
    { name: "FAIRY", className: "btn-fairy5" },
    { name: "FIGHTING", className: "btn-fighting6" },
    { name: "FIRE", className: "btn-fire7" },
    { name: "FLYING", className: "btn-flying8" },
    { name: "GHOST", className: "btn-ghost9" },
    { name: "GRASS", className: "btn-grass10" },
    { name: "GROUND", className: "btn-ground11" },
    { name: "ICE", className: "btn-ice12" },
    { name: "NORMAL", className: "btn-normal13" },
    { name: "POISON", className: "btn-poison15" },
    { name: "PSYCHIC", className: "btn-psychic16" },
    { name: "ROCK", className: "btn-rock17" },
    { name: "STEEL", className: "btn-steel18" },
    { name: "WATER", className: "btn-water19" }
  ];

  // Ensure types array exists and perform matching
  const matchedText = Array.isArray(pokemon?.types)
    ? typeText.filter((type) =>
        pokemon.types.some((apiType) => apiType.toUpperCase() === type.name)
      )
    : [];

  const handleClick = () => {
    toggleTheme(); // Toggle theme using context
  };

  return (
    <div
      className={`pokemon-list-container ${matchedText.length > 0 ? matchedText[0].className : ""}`}
    >
      <div className="first-container">
        <Link to="/type" className="menus">
          <div className="menu">
            <img src={back} alt="Back Logo" className="back-logo" />
          </div>
        </Link>

        <div className="search">
          <h3>{pokemon?.name}</h3>
        </div>

        <div className="mode">
          <h3>#00{pokemon?.id}</h3>
        </div>
      </div>
{/* 
      <div classNa5me="second-container">
      <img src={pokeball} alt="Pokemon Logo" className="" />
      </div> */}

      <div className="pokemon-results-container">
        {pokemon ? (
          <PokemonFinalCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            stats={pokemon.stats}
            height={pokemon.height}
            weight={pokemon.weight}
            moves={pokemon.moves}
          />
        ) : (
          <p>No Pokémon data available.</p>
        )}
      </div>
    </div>
  );
};

export default AfterSearch;
