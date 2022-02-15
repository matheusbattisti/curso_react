import React from "react";

const GameOver = ({ retry }) => {
  return (
    <div className="end">
      <h1>Fim de jogo!</h1>

      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
