import type { Right1Props } from '@/App';
import Right3 from '@/components/Right3';
import { useEffect } from 'react';

function Right2({ onClick }: Right1Props) {
  useEffect(()=>{
    console.log('### Right2 렌더링.');
  });
  return (
    <div>
      <h2>Right2</h2>
      <Right3 onClick={onClick} />
    </div>
  );
}

export default Right2;