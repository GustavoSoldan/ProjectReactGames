import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import Home from './JS/Components/home';
import Novidades from './JS/Components/novidades';

//1- configurando router

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "novidades",
    element: <Novidades />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

