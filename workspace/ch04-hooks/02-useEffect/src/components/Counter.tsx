import Button from '@/components/Button';
import { useEffect, useState } from 'react';

interface CounterProps {
  children: string; 
}

const Counter = ({children}: CounterProps) => {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  //카운트 감소
  const handleDown = () => {
    setCount(count - step);
  }

  //카운트 증가
  const handleUp = () => {
    setCount(count + step);
  }

  //Todo1. 1초 후에 handleUp()을 호출해서 자동으로 값을 1회 증가
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);

  console.log('input 요소', document.querySelector('input'));
  useEffect(() => {
    console.log('input 요소', document.querySelector('input'));
    document.querySelector('input')?.focus();
  })

  //Todo1. 1초 후에 handleUp()을 호출해서 자동으로 값을 1회 증가
  // useEffect(() => { //setup
  //   console.log('\t\tCounter 마운트됨')
  //   setTimeout(() => {
  //   handleUp();
  // }, 1000);
  //   console.log('dependencies에 빈배열을 지정하면 마운트된 후에 한번만 호출됨')
  // }, []);

//리액트 규칙: 렌더링 중에 상태가 변경되면 안됨

  //Todo1. 증감치(step)가 수정되면 1초 후에 handleUp()을 호출해서 자동으로 값을 1회 증가
  useEffect(() => { //setup
    console.log('\t\tCounter 마운트 또는 step이 변경됨')
    setTimeout(() => {
    handleUp();
  }, 1000);
    console.log('dependencies에 컴포넌트가 업데이트 될때 지정한 값들 중에 하나라도 수정되었을 경우 호출됨')
  }, [step]);

  //3. 1초마다 handleUp()을 호출해서 자동으로 값을 계속 증가
  useEffect(() => { //setup
    console.log('\t\tCounter 마운트 또는 업데이트 됨');
    const timerId = setInterval(() => {
    handleUp();
  }, 1000);
    console.log('dependencies를 생략하면 마운트된 후와 업데이트된 후에도 호출됨', timerId);

    return () => { //cleanup
      console.log('\t\tcleanup 호출', timerId);
      clearInterval(timerId);
    }
  });

  //카운트 초기화
  const handleReset = () => {
    setCount(initCount);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {/* <Button style={{}} onMouseOver={{}} formMethod={{}} formAction={{}} disabled={{}} id="" name="" value="" role="" tabIndex="" type="button" onClick={handleDown}>-_-</Button> */}
      <Button disabled bgColor="red" style={{background: 'blue'}} type="button" onClick={handleDown}>-_-</Button>
      <Button bgColor="gray" type="button" onClick={handleReset}>0_0</Button>
      <Button style={{color: 'black'}} type="button" onClick={handleUp}>+_+</Button>
      <span>{count}</span>
    </div>
  )
}

export default Counter;
