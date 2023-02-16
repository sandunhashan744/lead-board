import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import the component
import Footer from "./component/footer/footer";
import Hero from "./component/hero/hero";
import NavBar from "./component/navbar/navBar";
import SignalProvider from "./component/provider/signalProvider";
import Subscribe from './component/subscribe/subscribe';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <SignalProvider/>
    },
    {
      path : '/subscribe',
      element : <Subscribe />
    }
  ])

  return (
    <>
    <NavBar/>
    <Hero />
    <RouterProvider router={router} />
    <Footer />
    </>
  );
}

export default App;
