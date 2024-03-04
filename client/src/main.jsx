import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//components
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Home from "./components/Home.jsx"
import TrainerList from "./components/TrainerList.jsx"

//actions
import { loginUser, registerUser } from "../utils/actions/auth.js"


//loaders
import { getAllTrainers } from "../utils/loaders.js"


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
      }
    
      
    ]


    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
