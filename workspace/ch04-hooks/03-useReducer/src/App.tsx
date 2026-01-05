import Counter from '@/components/Counter';
import Header from '@/components/Header';

const App = () => {
  console.log('\tApp 호출됨');
  return (
    <>
      <Header />
      <Counter>10</Counter>
      <Counter>20</Counter>
    </>
  )
}

export default App;
