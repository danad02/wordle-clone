import React from "react";
import { NUM_OF_LETTERS_PER_WORD } from "../../constants";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");
  const id = React.useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (gameStatus !== "running") {
      return;
    }

    if (guess.length !== NUM_OF_LETTERS_PER_WORD) {
      return;
    }

    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor={`guess-${id}`}>Enter guess:</label>
      <input
        id={`guess-${id}`}
        type="text"
        minLength={NUM_OF_LETTERS_PER_WORD}
        maxLength={NUM_OF_LETTERS_PER_WORD}
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
        title={`${NUM_OF_LETTERS_PER_WORD} letter word`}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
