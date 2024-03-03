import { useState } from "react";

export default function TurnCounter() {
  const result = useState(0);
  const currentTurn = result[0];
  const setTurnValue = result[1];

  function handleIncrement(outcome) {
    console.log("increment clicked");

    if (outcome == "decrease" && currentTurn > 0) {
      setTurnValue(currentTurn - 1);
    } else if (outcome == "decrease" && currentTurn === 0) {
      return alert("counter already set to 0!");
    } else if (outcome == "increase") {
      setTurnValue(currentTurn + 1);
    }
  }

  return (
    <div>
      <p>
        <button onClick={() => handleIncrement("decrease")}> decrease </button>
      </p>
      <p>
        Current turn: <div className="counterNum">{currentTurn}</div>
      </p>
      <p>
        <button onClick={() => handleIncrement("increase")}> increase </button>
      </p>
    </div>
  );
}
