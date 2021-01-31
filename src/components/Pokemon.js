import React from "react";
import "./Pokemon.css";

function Pokemon({pokemon, handleChoose}) {

    const onChoose = (pokemon) => {
        console.log(`you clicked ${pokemon.name} is ${pokemon.clicked}`);
        handleChoose(pokemon);
    };

  return (
    <button type="button" className="Pokemon" onClick={()=>{
        onChoose(pokemon);
    }}>
      <img src={pokemon.img} className="pokepic" alt={pokemon.name} />
      <div>
        <h3 className="pokeinfo">{pokemon.name}</h3>
        <p className="pokeinfo">{pokemon.type}</p>
      </div>
    </button>
  );
}

export default Pokemon;
