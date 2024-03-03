//dice roll conditional statement
export default function DiceRoll() {
  const dice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = Math.floor(Math.random() * dice.length);

  if (dice[index] % 2 === 0) {
    return <h5>{dice[index]} means even stevens</h5>;
  } else {
    return <h5>{dice[index]} means oddball</h5>;
  }
}
