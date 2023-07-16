import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS_PER_WORD } from "../../constants";

function Guess({ guessStatus }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_PER_WORD).map((num) => (
        <span
          key={num}
          className={`cell ${guessStatus ? guessStatus[num].status : ""}`}
        >
          {guessStatus ? guessStatus[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
