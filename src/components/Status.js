import React from "react";
import "./Status.css";

function Status({currentScore, highScore, isPerfect, onToggleStatus, setCurrentScore}) {
  return (
    <div className={isPerfect ? `Status perfect` : `Status game_over`}>
      <h1>{isPerfect ? 'Perfect' : 'Game Over'}</h1>
      <p className="your_score">
        {`Your score: ${currentScore}`}
      </p>
  <p>{`High score: ${highScore}`}</p>
      <button className="btn_status btn" onClick={() => {
        onToggleStatus(false, false);
        setCurrentScore(0);
      }}>
        Play again
      </button>
    </div>
  );
}

export default Status;
