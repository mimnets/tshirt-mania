import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
