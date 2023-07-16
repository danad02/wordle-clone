import React from "react";
import { range } from "../../utils";

function Guess({ guessStatus }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
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
