import NavBar from './components/Nav.jsx'
import { Outlet } from "react-router-dom"
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <main>

        <Outlet />
      </main>
    </>
  )
}

export default App
