import type { Right1Props } from '@/App';
import { useEffect } from 'react';

function Right3({ onClick }: Right1Props) {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ onClick }>+1</button>
    </div>
  );
}

export default Right3;