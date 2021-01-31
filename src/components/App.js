import React, { useState } from "react";
import "./App.css";
import Start from "./Start";
import Status from "./Status";
import PokemonGrid from "./PokemonGrid";
import data from "../data";

function App() {
  const defaultorder = data;
  const [pokeList, setPokeList] = useState(defaultorder);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showStart, setShowStart] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showStatus, setShowStatus] = useState({
    show: false,
    perfect: false,
  });

  //show or hide Start screen
  const toggleStart = () => {
    setShowStart(!showStart);
    setShowGame(!showGame);
  };

  //show or hide status(perfect or game over) screen
  const toggleStatus = (shouldShow, shouldPerfect) => {
    setShowStatus({
      show: shouldShow,
      perfect: shouldPerfect,
    });
    setPokeList(defaultorder);
    setShowGame(!showGame);
  };

  //this method handles the core gameplay
  //increment score when clicked and set high score if clicked more than once, then reset current score;
  //shows game over screen and perfect score screen depending on outcome of game
  const handleChoose = (pokemon) => {
     if (!pokemon.clicked) {
      setCurrentScore(currentScore + 1);
      setPokeList(
        pokeList.map((poke) => {
          if (pokemon.id === poke.id) {
            poke.clicked = true;
          }

          return poke;
        })
      );

      if ((currentScore + 1) === 12) {
        setHighScore(currentScore + 1);
        toggleStatus(true, true);
      } 
    } else {
      if (currentScore > highScore) setHighScore(currentScore);
      setPokeList(
        pokeList.map((poke) => {
          poke.clicked = false;
          return poke;
        })
      );
      toggleStatus(true, false);
    }
    console.log(currentScore);
  };

  //shuffle Pokemons array
  const handleShufflePokemons = () => {
    setPokeList((pokeList) => {
      let shuffledlist = pokeList;

      //Fisher Yates Method for randomizing the array
      for (let i = shuffledlist.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = shuffledlist[i];
        shuffledlist[i] = shuffledlist[j];
        shuffledlist[j] = k;
      }

      return shuffledlist;
    });
  };

  return (
    <div className="App">
      {showStatus.show ? (
        <Status
          currentScore={currentScore}
          highScore={highScore}
          isPerfect={showStatus.perfect}
          onToggleStatus={toggleStatus}
          setCurrentScore={setCurrentScore}
        />
      ) : null}
      {showStart ? <Start onToggleStart={toggleStart} /> : ""}
      {showGame ? (
        <PokemonGrid
          pokeList={pokeList}
          currentScore={currentScore}
          highScore={highScore}
          handleChoose={handleChoose}
          handleShufflePokemons={handleShufflePokemons}
        />
      ) : null}
    </div>
  );
}

export default App;
