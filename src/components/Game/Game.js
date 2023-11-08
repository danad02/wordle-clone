import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner";
import LossBanner from "../LossBanner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  // Possible values are "running", "win", "loss"
  const [status, setStatus] = React.useState("running");

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus("win");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("loss");
    }
  };

  const handleKeyClick = (key) => {
    if (guess.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuess(guess + key);
  };

  const guessStatuses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guessStatuses={guessStatuses} />
      <GuessInput
        guess={guess}
        handleGuessChange={setGuess}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={status}
      />
      <Keyboard guessStatuses={guessStatuses} onKeyClick={handleKeyClick} />
      {status === "win" && <WinBanner numOfGuesses={guesses.length} />}
      {status === "loss" && <LossBanner answer={answer} />}
    </>
  );
}

export default Game;
