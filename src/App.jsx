import { useState } from 'react';
import Dice from './Dice';
// import Confetti from 'react-confetti/dist/types/Confetti';

import './App.css';

export default function App() {
  const [dice, setDice] = useState(newDice());
  const [hold, setHold] = useState([]);

  function newDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const singleDice = {
        id: '',
        num: '',
        isHeld: false,
      };
      singleDice.id = i + 1;
      singleDice.num = Math.ceil(Math.random() * 6);
      diceArray.push(singleDice);
    }
    return diceArray;
  }

  function diceRoll() {
    setDice(newDice());
  }

  const diceElements = dice.map((item) => {
    return <Dice key={item.id} num={item.num} />;
  });

  return (
    <main>
      <div className='dice-grid'>{diceElements}</div>
      <button className='dice-roll' onClick={diceRoll}>
        Roll
      </button>
    </main>
  );
}
