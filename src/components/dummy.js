import React from 'react';
import './dummy.css';

const dummy = () => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
      </div>
      <div className="pokemon-info">
        <h2>#001</h2>
        <h3>Bulbasaur</h3>
      </div>
    </div>
  );
};

export default dummy;
