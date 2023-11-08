import React from "react";
import { KEYBOARD } from "../../constants";

const Keyboard = ({ guessStatuses, onKeyClick }) => {
  const letterStatuses = new Map();
  guessStatuses.forEach((guessStatus) => {
    guessStatus.forEach(({ letter, status }) => {
      const letterStatus = letterStatuses.get(letter);

      if (letterStatus === "correct") {
        return;
      }

      if (letterStatus === "misplaced" && status === "correct") {
        letterStatuses.set(letter, status);
        return;
      }

      if (letterStatus === "incorrect") {
        letterStatuses.set(letter, status);
        return;
      }

      letterStatuses.set(letter, status);
    });
  });

  console.log("letterStatuses", letterStatuses);

  return (
    <div className="keyboard">
      {KEYBOARD.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <button
              key={letter}
              className={`keyboard-letter ${letterStatuses.get(letter)}`}
              onClick={() => onKeyClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
