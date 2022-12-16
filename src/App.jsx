import { useState } from 'react';
import Dice from './Dice';
// import Confetti from 'react-confetti/dist/types/Confetti';

import './App.css';

export default function App() {
  const [newDice, setNewDice] = useState(allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const singleDice = {
        id: '',
        num: '',
      };
      singleDice.id = i + 1;
      singleDice.num = Math.ceil(Math.random() * 6);
      diceArray.push(singleDice);
    }
    return diceArray;
  }

  const diceElements = newDice.map((item) => {
    return <Dice key={item.id} num={item.num} />;
  });

  return (
    <main>
      <div className='dice-grid'>{diceElements}</div>
    </main>
  );
}
