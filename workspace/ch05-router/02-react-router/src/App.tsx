import { RouterProvider } from 'react-router';
import './App.css';
// import router from '@/routes';
import router from '@/routes-lazy';
// import router from '@/routes-hash';


function App() {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;