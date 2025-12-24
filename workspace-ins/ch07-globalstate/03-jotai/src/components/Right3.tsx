import { countAtom } from '@/jotai/atoms';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // useAtom: useState처럼 getter, setter를 배열로 반환. 구독됨
  // const [count, setCount] = useAtom(countAtom);

  // useSetAtom: setter만 사용
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    setCount((count) => count + step);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;