import Reaction from '../reaction.js';
// Counter 컴포넌트
function Counter(){
  console.log('Counter 렌더링 됨');
  //상태
    const [count, setCount] = Reaction.useState(5);
    

// 카운터 감소
const handleDown = () => {
  // 데이터 갱신, count 값 감소
  setCount(count - 1);
  // count--;

  
};

// 카운터 증가
const handleUp = () => {
  // 데이터 갱신, count 값 증가
  setCount(count + 1);
  // count++;

  
};

// 카운터 초기화
const handleReset = event => {
  console.log(event);
  
  // 데이터 갱신, count 값 초기화
  setCount(0);
  // count = 0;

  
};

  return(
    Reaction.createElement('div', { id: 'counter' }, 

    // 태그의 onclick 속성으로 이벤트 핸들러를 지정하면 전역 스코프에서 찾음
    // 컴포넌트 내부에 이벤트 핸들러가 정의되어 있기 대문에 찾을 수 없음
      Reaction.createElement('button', { type: 'button', onclick: handleDown }, '-'), 
      Reaction.createElement('button', { type: 'button', onclick: handleReset }, 0), 
      Reaction.createElement('button', { type: 'button', onclick: handleUp }, '+'), 
      Reaction.createElement('span', null, count))
  );
}

export default Counter;