import { useEffect } from 'react';
import Left1 from '@/components/Left1';
import Right1 from '@/components/Right1';
import './App.css';
import { CounterProvider } from '@/contexts/CounterContext';

export interface CountProps {
  count: number;
}

export interface CountUpProps {
 countUp: (step: number) => void
}


function App() {
 
  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>02 Context API - useContext 훅</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <CounterProvider>
            <Left1 />    { /* props로 count 전달*/}
              <Right1 />  { /* props로 countUp(){} 전달 */}
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;