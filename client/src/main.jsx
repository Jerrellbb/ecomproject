import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//components
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Home from "./components/Home.jsx"
import TrainerList from "./components/TrainerList.jsx"
import TrainerDetail from "./components/TrainerDetail.jsx"
import Cart from "./components/Cart.jsx"
import CreateTrainer from "./components/CreateTrainer.jsx"

//actions
import { loginUser, registerUser } from "../utils/actions/auth.js"


//loaders
import { getAllTrainers, singleTrainer, getCart } from "../utils/loaders.js"

import { createTrainer } from "../utils/actions/trainers.js"
import { updateCart } from "../utils/actions/cart.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        path: "/",
        element: <Home/ >
      },
      {
        path: "/auth/login/",
        element: <Login />,
        action: async ({ request }) => loginUser(request),
      },
      {
        path: "/auth/register/",
        element: <Register />,
        action: async ({ request }) => registerUser(request),
      },
      {
        path: "/trainers/",
        element: <TrainerList />,
        loader: async ({ params }) => getAllTrainers(params),
      },
      {
        path: "/trainer/:id/",
        element: <TrainerDetail />,
        loader: async ({ params }) => singleTrainer(params.id),
        action: async ({ request }) => updateCart(request),
      },
      {
        path: "/basket/:id/",
        element: <Cart />,
        loader: async ({ params }) => getCart(params.id),
      },
      {
        path: "/trainer/create/",
        element: <CreateTrainer />,
        action: async ({ request }) => createTrainer(request),
      },
    
    
      
    ]


    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
