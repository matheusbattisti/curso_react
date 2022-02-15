import { useState } from "react";

// styles
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
}) => {
  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
  };

  return (
    <div className="game">
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          <span className="letter" key={i}>
            {letter}
          </span>
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivnhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
      </div>
    </div>
  );
};

export default Game;
