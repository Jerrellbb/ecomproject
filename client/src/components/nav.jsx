import {Nav, Navbar} from 'react-bootstrap'

export default function NavBar(){

return(
  <>
      <Navbar>
        <div className="navlinks">

          <Nav.Link onClick={handleClick}> <button type='button' id='/'>Home</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/agencies/'>View Trainers</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id={`/auth/users/${getUserId}`}>My profile</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/login/'>Login</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/register/'>Register</button> </Nav.Link>
        </div>


      </Navbar>
  </>
)

}