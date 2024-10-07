import React, { useEffect, useState } from "react";

const MovesTest = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch Pokémon data by ID
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemon(data); // Set the Pokémon data including moves
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  return (
    <div>
      <h1>{pokemon?.name}</h1> {/* Display Pokémon name */}
      <h2>Moves:</h2>
      <ul>
        {pokemon?.moves.map((move, index) => (
          <li key={index}>{move.move.name}</li> // Display each move name
        ))}
      </ul>
    </div>
  );
};

export default MovesTest;
