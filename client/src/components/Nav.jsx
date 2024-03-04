import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NavBar(){

  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`${e.target.id}`)
  }

return(
  <>
      <Navbar>
        <div className="navlinks">

          <Nav.Link onClick={handleClick}> <button type='button' id='/'>Home</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/trainers/'>View Trainers</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/'>My profile</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/login/'>Login</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/register/'>Register</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/basket/'>Cart</button> </Nav.Link>
        </div>


      </Navbar>
  </>
)

}