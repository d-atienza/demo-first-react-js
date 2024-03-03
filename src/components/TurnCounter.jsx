import { useState } from "react";

export default function TurnCounter() {
  const result = useState(0);
  const currentTurn = result[0];
  const setTurnValue = result[1];

  function handleIncrement() {
    console.log("increment clicked");
    setTurnValue(currentTurn + 1);
  }

  return (
    <div>
      <p>Current turn: {currentTurn}</p>
      <p>
        <button onClick={handleIncrement}> increment </button>
      </p>
    </div>
  );
}
