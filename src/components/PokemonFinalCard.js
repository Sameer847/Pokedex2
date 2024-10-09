import React from "react";
import "./PokemonFinalCard.css";
import "./Type.css";
import { useTheme } from "../components/ThemeContext"; // Import useTheme
import Weight from "../assets/weight1.svg";
import Scale from "../assets/Scale.svg";

const PokemonFinalCard = ({
  id,
  name,
  image,
  types,
  moves,
  stats = [],
  height,
  weight
}) => {
  const typeList = [
    { name: "BUG", className: "btn-bug" },
    { name: "DARK", className: "btn-dark" },
    { name: "DRAGON", className: "btn-dragon" },
    { name: "ELECTRIC", className: "btn-electric" },
    { name: "FAIRY", className: "btn-fairy" },
    { name: "FIGHTING", className: "btn-fighting" },
    { name: "FIRE", className: "btn-fire" },
    { name: "FLYING", className: "btn-flying" },
    { name: "GHOST", className: "btn-ghost" },
    { name: "GRASS", className: "btn-grass" },
    { name: "GROUND", className: "btn-ground" },
    { name: "ICE", className: "btn-ice" },
    { name: "NORMAL", className: "btn-normal" },
    { name: "PLANT", className: "btn-plant" },
    { name: "POISON", className: "btn-poison" },
    { name: "PSYCHIC", className: "btn-psychic" },
    { name: "ROCK", className: "btn-rock" },
    { name: "STEEL", className: "btn-steel" },
    { name: "WATER", className: "btn-water" }
  ];

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
    { name: "PLANT", className: "btn-plant14" },
    { name: "POISON", className: "btn-poison15" },
    { name: "PSYCHIC", className: "btn-psychic16" },
    { name: "ROCK", className: "btn-rock17" },
    { name: "STEEL", className: "btn-steel18" },
    { name: "WATER", className: "btn-water19" }
  ];

  const { isBlack, toggleTheme } = useTheme(); // Use context
  // Filter the typeList based on the types received from the API
  const matchedTypes = typeList.filter((type) =>
    types.some((apiType) => apiType.toUpperCase() === type.name)
  );

  const matchedText = typeText.filter((type) =>
    types.some((apiType) => apiType.toUpperCase() === type.name)
  );

  console.log("Pokemon moves data:", moves); // Log in PokemonList or before passing to PokemonFinalCard
  let text1 = "About";
  return (
    <div className={`pokemon-card ${isBlack ? "black_theme_two" : ""}`}>
      <img src={image} alt={name} className="after_image" />
      <div className="pokemon-info">
        {/* <span>#00{id}</span> */}
        {/* <h3>{name}</h3> */}
      </div>

      {/* <h3>{types}</h3> */}
      {/* <h3>Types: {types.join(", ")}</h3> */}
     
      <div className="sec-container">
        <div className="pokemon-button-container">
          {matchedTypes.map((type, index) => (
            <button
              key={index}
              className={`btn btn-pokemon-type ${type.className}`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>
      <br />
      <div className="third-container">
        {/* <h3 >About</h3> */}
        {matchedText.length > 0 && (
          <h3 className={`${matchedText[0].className}`}>{text1}</h3>
        )}
      </div>
      <br />
      <br />
      {/* <h3>{moves}</h3> */}
      {/* <h3 className="acctack_mov">ATTACKS AND MOVEMENTS</h3> */}

      {/* Height, weight and Moves section start here  */}
      <div className="forth-container">
        <div className="first_weight">
          <div className="weight">
            <img src={Weight} alt="weight_Logo" className="weight_Logo" />
            <h3>{weight.toString().split("").join(",")} kg</h3>
          </div>
          <p>Weight</p>
        </div>

        <div className="second_weight">
          <div className="height">
            <img src={Scale} alt="weight_Logo" className="weight_Logo" />
            <h3>{height.toString().split("").join(",")} kg</h3>
          </div>
          <p>Height</p>
        </div>

        <div className="second_weight">
          <div className="colorphyll">
            {/* <img src={Scale} alt="weight_Logo" className="weight_Logo" /> */}
            <p>
              {/* Show first two moves */}
              {moves && moves.length > 0 ? (
                moves.slice(0, 2).map((move, index) => (
                  <span key={index}>
                    {move.move.name}
                    {index < 1 ? ", " : ""} {/* Add comma between moves */}
                  </span>
                ))
              ) : (
                <span>No moves available</span>
              )}
            </p>
          </div>
          <p>Moves</p>
        </div>
      </div>
      <br />
      {/* Base Stats Section */}
      {stats.length > 0 ? (
        <div className="stats-container">
          <h3>Base Stats</h3>
          <ul>
            {stats.map((stat, index) => (
              <li key={index} className="stat-item">
                <span>{stat.stat.name.toUpperCase()}:</span>
                <span className="stat-value">{stat.base_stat}</span>{" "}
                {/* Display value */}
                <div className="stat-bar-container">
                  {/* <div
              className="stat-bar"
              style={{ width: `${stat.base_stat}%` }} // Bar width based on stat value
            ></div> */}

                  <div
                    className={`stat-bar ${
                      matchedText.length > 0 ? matchedText[0].className : ""
                    }`}
                    style={{ width: `${stat.base_stat}%` }} // Bar width based on stat value
                  >
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No stats available</p>
      )}

      {/* <div className="moves-container">
        {moves && moves.length > 0 ? (
          <ul>
            {moves.map((move, index) => (
              <li key={index}>{move.move.name}</li> // Adjust based on actual data structure
            ))}
          </ul>
        ) : (
          <p>No moves available</p>
        )}
      </div> */}
    </div>
  );
};

export default PokemonFinalCard;
