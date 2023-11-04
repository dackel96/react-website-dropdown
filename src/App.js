import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

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
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: '/services',
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
    {
      path: '/products',
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
    {
      path: '/marketing',
      element: (
        <>
          <Navbar />
          <Marketing />
        </>
      ),
    },
    {
      path: '/consulting',
      element: (
        <>
          <Navbar />
          <Consulting />
        </>
      ),
    },
    {
      path: '/contact-us',
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
    {
      path: '/sign-up',
      element: (
        <>
          <Navbar />
          <SignUp />
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
