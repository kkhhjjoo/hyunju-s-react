import router from '@/routes';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="todoapp">
        { /* react-router-dom가 router를 기준으로 선택한 컴포넌트를 렌더링 */}
        <RouterProvider router={ router } />
    </div>
    </>
  );
}

export default App;