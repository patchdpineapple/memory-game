import React, { useEffect } from "react";
import "./PokemonGrid.css";
import Pokemon from './Pokemon';

function PokemonGrid({ pokeList, currentScore, highScore, handleChoose, handleShufflePokemons }) {

  

  
  useEffect(() => {
    handleShufflePokemons();
  });

  return (
    <div className="PokemonGrid">
      <div className="score_container">
        <div className="current_score_container">
          <p>Your score: </p>
          <strong className="yourscore">{currentScore}</strong>
        </div>
        <p>High score: {highScore}</p>
      </div>
      <div className="pkmngrid">
        {pokeList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} handleChoose={handleChoose}/>
        ))}
      </div>
    </div>
  );
}

export default PokemonGrid;
