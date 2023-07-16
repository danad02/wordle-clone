import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");
  const id = React.useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (gameStatus !== "running") {
      return;
    }

    if (guess.length !== 5) {
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
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
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
