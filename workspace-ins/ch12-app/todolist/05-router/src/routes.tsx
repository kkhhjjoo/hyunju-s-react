import Layout from "@/components/Layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import TodoAdd from "@/pages/TodoAdd";
import TodoEdit from "@/pages/TodoEdit";
import TodoInfo from "@/pages/TodoInfo";
import TodoList from "@/pages/TodoList";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },

  {
    path: '/todo',
    element: <Layout />,
    children: [
      { path: 'todolist', element: <TodoList /> },
      { path: 'todoadd', element: <TodoAdd /> },
      { path: 'todoinfo', element: <TodoInfo /> },
      { path: 'todoedit', element: <TodoEdit /> },
    ]
  }, 
  
]);

export default router;