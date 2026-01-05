import { type Left1Props} from '@/App';
import Left2 from '@/components/Left2';
import { useEffect } from 'react';



function Left1({count}: Left1Props) {
  
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });
  return (
    <div>
      <h1>Left1</h1>
      <Left2 count={ count } />
    </div>
  );
}

export default Left1;