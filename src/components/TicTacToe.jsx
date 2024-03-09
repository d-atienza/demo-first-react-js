import { useState } from "react";

export default function TicTacToe() {
  console.log("this rendered again", new Date());
  const initialCellDataArray = [
    { id: 1, side: "back" },
    { id: 2, side: "back" },
    { id: 3, side: "back" },
    { id: 4, side: "front" },
    { id: 5, side: "back" },
    { id: 6, side: "front" },
    { id: 7, side: "back" },
    { id: 8, side: "back" },
    { id: 9, side: "back" },
  ];

  const [cellDataArray, setCellDataArray] = useState(initialCellDataArray);

  const arrayOfCellElements = cellDataArray.map((food) => {
    if (food.side == "back") {
      return (
        <div
          className="cell"
          key={food.id}
          onClick={() => console.log("pizza")}
        >
          🍕
        </div>
      );
    } else {
      return (
        <div
          className="cell"
          key={food.id}
          onClick={() => console.log("burger")}
        >
          🍔
        </div>
      );
    }
  });

  function resetGame() {
    const newCellDataArray = [
      { id: 1, side: "back" },
      { id: 2, side: "back" },
      { id: 3, side: "back" },
      { id: 4, side: "back" },
      { id: 5, side: "back" },
      { id: 6, side: "back" },
      { id: 7, side: "back" },
      { id: 8, side: "back" },
      { id: 9, side: "back" },
    ];

    setCellDataArray(newCellDataArray);
  }

  return (
    <div>
      <div className="gameGrid">{arrayOfCellElements}</div>
      <button onClick={resetGame}>reset</button>
    </div>
  );
}
