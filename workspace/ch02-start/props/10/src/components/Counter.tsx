import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  console.log('\tCounter 렌더링.');

  const [count, setCount] = useState(0);

  const onAdd = () => {
      console.log('추가');
      setCount(count + 1);

    } 
  const onMinus = () => {
    console.log('빼기');
    setCount(count - 1);
  } 
  const onZero = () => {
    console.log('0');
    setCount(0);
  } 
  return (
    
    <div id="counter">
      <Button type="submit" onClick={onMinus} color="red">-_-</Button>
      <Button onClick={onZero}>0_0</Button>
      <Button onClick={onAdd} color="blue">+_+</Button>
      <span>{count}</span>
    </div>
  )
}

export default Counter;
