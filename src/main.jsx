import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import ErrorPages from './ErrorPages/ErrorPages';
import Home from './Pages/Home/Home';
import Favourites from './Pages/Favourites/Favourites';
import Login from './Pages/Login/Login';
import PhoneDetails from './PhoneDetails/PhoneDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPages></ErrorPages>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/favourites',
        element : <Favourites></Favourites>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path: '/phones/:id',
        element : <PhoneDetails></PhoneDetails>,
        loader : ()=> fetch('/Phones.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)