import { type Left1Props } from '@/App';
import { useEffect } from 'react';

function Left3({count}: Left1Props) {

  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h3>Left3</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;