import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signOutUser } from '../../utils/actions/auth'
import { cartId, getUserId, cart } from '../../utils/helpers/common'
// import { useState, useEffect } from 'react'

export default function NavBar() {
  
  const activeUserId = getUserId()
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`${e.target.id}`)
  }




  const handleSignOut = () => {
    signOutUser()
    navigate('/')
  }

  return (
    <>
      <navbar  >
        <div className="navlinks">

          <Nav.Link onClick={handleClick}> <button type='button' id='/'>Home</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/trainers/'>View Trainers</button> </Nav.Link>
          <Nav.Link onClick={handleClick}> <button type='button' id='/trainer/create/'>List a Trainer</button> </Nav.Link>
          
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/register/'>Register</button> </Nav.Link>
          {cart() && (<Nav.Link onClick={handleClick}> <button type='button' id={`/basket/${cartId()}`}>Cart</button> </Nav.Link>)}
          {activeUserId ? (<Nav.Link onClick={handleSignOut}> <button type='button' id='/signout/'>Sign Out</button> </Nav.Link>
          ):(
          <Nav.Link onClick={handleClick}> <button type='button' id='/auth/login/'>Login</button> </Nav.Link>)
          }
          

        </div>


      </navbar>
    </>
  )

}