import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'


//components
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Home from "./components/Home.jsx"
import TrainerList from "./components/TrainerList.jsx"
import TrainerDetail from "./components/TrainerDetail.jsx"
import Basket from "./components/Basket.jsx"
import CreateTrainer from "./components/CreateTrainer.jsx"
import EditTrainer from "./components/EditTrainer.jsx"
import ShippingAddressForm from "./components/PaymentAddress.jsx"

//actions
import { loginUser, registerUser } from "../utils/actions/auth.js"
import { createTrainer, updateTrainer, deleteTrainer } from "../utils/actions/trainers.js"

//loaders
import { getAllTrainers, singleTrainer, getCart } from "../utils/loaders.js"





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: async ({ params }) => getAllTrainers(params),
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
        action: async ({  params }) => deleteTrainer(params.id)
      },
      {
        path: "/basket/:id/",
        element: <Basket />,
        loader: async ({ params }) => getCart(params.id),
      },
      {
        path: "/trainer/create/",
        element: <CreateTrainer />,
        action: async ({ request }) => createTrainer(request),
      },
      {
        path: "/trainer/:id/edit/",
        element: <EditTrainer />,
        loader: async ({ params }) => singleTrainer(params.id),
        action: async ({ request, params }) => updateTrainer(request, params.id),
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
      {
        path: "/shippinginformation/",
        element: <ShippingAddressForm />,
        
      },



    ]



  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
