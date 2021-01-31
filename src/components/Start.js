import React from "react";
import "./Start.css";
import pokelogo from "../img/pokelogo.svg.png";

function Start(props) {
  return (
    <div className="Start">
      <img src={pokelogo} className="pokelogo" alt="PokemonLogo" />
      <h1>Memory Game</h1>
      <p>
        Rules: Click a Pokemon once to score. The game is over if you clicked the same
        Pokemon again.
      </p>
      <button className="btn_start btn" onClick={props.onToggleStart}>
        Start
      </button>
    </div>
  );
}

export default Start;
