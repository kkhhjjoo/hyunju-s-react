import Reaction from './reaction.js';
import Counter from './components/Counter.js';
import Header from './components/Header.js';

// App 컴포넌트
function App(){
  console.log('App 렌더링 됨');
  return (
    Reaction.createElement('div', { id: 'app' }, Header, Counter)
  );
}


export default App;