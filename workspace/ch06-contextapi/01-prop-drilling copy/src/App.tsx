import { useEffect, useState } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import './App.css';

export interface Right1Props {
  count?: number;  // 선택적으로 받을 수 있음
  onClick?: () => void;
  setCount?: React.Dispatch<React.SetStateAction<number>>
}

export interface Left1Props {
  count?: number;
}


function App() {

  //count 정의
  const [count, setCount] = useState<number>(0);

  //countUp() 정의
  const countUp = () => {
    setCount(count + 1);
  }
 
  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>01 Prop Drilling</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
        
          <Left1 count={count} />
            <Right1 onClick={countUp} />
          { /* props로 count 전달*/}
          { /* props로 countUp(){} 전달 */}
        </div>
      </div>
    </>
  );
}

export default App;