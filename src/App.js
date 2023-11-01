import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={path} />{' '}
    </>
  );
}

export default App;
