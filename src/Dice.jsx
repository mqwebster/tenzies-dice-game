import React from 'react';

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#ffffff',
  };
  return (
    <div className='dice' style={styles} onClick={props.diceHold}>
      <span>{props.num}</span>
    </div>
  );
}
