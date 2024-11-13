import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Notfound from './Notfound.jsx';



const ws=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }
  ,
  {
    path:"/about",
    element:<About/>
  }
  ,
  {
    path:"/gallery",
    element:<Gallery/>
  },
  {
    path:"*",
    element:<Notfound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ws} />
  </StrictMode>,
)
