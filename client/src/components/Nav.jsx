import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signoutUser } from '../../utils/actions/auth'

export default function NavBar(){

  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`${e.target.id}`)
  }

  const handleSignOut = () => {
    signoutUser()
    navigate('/')
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
          <Nav.Link onClick={handleSignOut}> <button type='button' id='/signout/'>Sign Out</button> </Nav.Link>
        </div>


      </Navbar>
  </>
)

}