import React from "react";
import { NUM_OF_LETTERS_PER_WORD } from "../../constants";

function GuessInput({
  guess,
  handleGuessChange,
  handleSubmitGuess,
  gameStatus,
}) {
  const id = React.useId();
  const guessInputId = `${id}-guess`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (gameStatus !== "running") {
      return;
    }

    if (guess.length !== NUM_OF_LETTERS_PER_WORD) {
      return;
    }

    handleSubmitGuess(guess);
    handleGuessChange("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor={guessInputId}>Enter guess:</label>
      <input
        id={guessInputId}
        type="text"
        minLength={NUM_OF_LETTERS_PER_WORD}
        maxLength={NUM_OF_LETTERS_PER_WORD}
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
        title={`${NUM_OF_LETTERS_PER_WORD} letter word`}
        value={guess}
        onChange={(event) => {
          handleGuessChange(event.target.value.toUpperCase());
        }}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
