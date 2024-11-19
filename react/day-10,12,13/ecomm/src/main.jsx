import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetailsPage from './ProductDetailsPage.jsx'
import AddCart from './AddCart.jsx'
import Layout from './Layout.jsx'


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/detail-page/:id",
          element:<ProductDetailsPage/>
        },
        {
          path:"/cart",
          element:<AddCart/>
        },
        {
          path:"/",
          element:<App/>
        }
      ]
    },
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
