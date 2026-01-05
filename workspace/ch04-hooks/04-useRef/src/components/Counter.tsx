import Button from '@/components/Button';
import { useRef, useState } from 'react';

interface CounterProps {
  children: string; 
}

const Counter = ({children}: CounterProps) => {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  // const [step, setStep] = useState(1); //값이 변경되면 컴포넌트가 불필요하게 리렌더링 됨
  // - useState 사용 시 step 값이 변경될 때마다 컴포넌트가 리렌더링됨
  // - step은 화면에 표시되지 않고 계산에만 사용되므로 리렌더링이 불필요함


  // useRef 사용 목적 1: 리렌더링 없이 값 유지
  //1. 값이 변경되면 변경된 값을 유지하면서 리렌더링이 발생하지 않음
  const stepRef = useRef(1); // {current: 1} 객체를 반환

  //2. DOM 객체에 대한 직접 참조를 사용할 때
  const stepElem = useRef<HTMLInputElement>(null); //{current : null} 객체를 반환

  //카운트 감소
  const handleDown = () => {
    setCount(count - stepRef.current);
  }

  //카운트 증가
  const handleUp = () => {
    setCount(count + stepRef.current);
  }

  //카운트 초기화
  const handleReset = () => {
    setCount(initCount);
    //step input요소에 포커스 지정

    stepElem.current?.focus();

  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        ref={stepElem}
        id="step" 
        type="number" 
        defaultValue="1"
        onChange={(e) => stepRef.current = Number(e.target.value)}
      />
      {/* <Button style={{}} onMouseOver={{}} formMethod={{}} formAction={{}} disabled={{}} id="" name="" value="" role="" tabIndex="" type="button" onClick={handleDown}>-_-</Button> */}
      <Button bgColor="red" style={{background: 'blue'}} type="button" onClick={handleDown}>-_-</Button>
      <Button bgColor="gray" type="button" onClick={handleReset}>0_0</Button>
      <Button style={{color: 'black'}} type="button" onClick={handleUp}>+_+</Button>
      <span>{count}</span>
    </div>
  )
}

export default Counter;
