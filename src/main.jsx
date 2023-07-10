import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Create from "./components/Create.jsx";
import List from "./components/List.jsx";
import Home from './components/Home';
import Info from './components/Info';

// const router = createBrowserRouter([
//   {
//     path:"/create",
//     element:<Create/>
//   },
//   {
//     path:"/list",
//     element:<List/>
//   }
// ]);

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"create",
        element:<Create/>
      },
      {
        path:"list",
        element:<List/>
      },
      {
        path:"list/:id",
        element:<Info/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
