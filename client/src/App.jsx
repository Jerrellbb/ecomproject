import NavBar from './components/Nav.jsx'
import { Outlet } from "react-router-dom"
import './App.css'
import Footer from './components/Footer.jsx'
function App() {


  return (
    <>
      <NavBar />
      <main>

        <Outlet />

      </main>
      <Footer />
    </>
  )
}

export default App
