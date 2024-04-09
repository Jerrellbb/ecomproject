import { Nav, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signOutUser } from '../../utils/actions/auth'
import { cartId, getUserId, cart } from '../../utils/helpers/common'
import { useState } from 'react'
import logo from '../assets/Krep.png'

export default function NavBar() {
  const activeUserId = getUserId()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const handleClick = (e) => {
    navigate(`${e.target.id}`)
    setShowModal(false) 
  }

  const handleSignOut = () => {
    signOutUser()
    navigate('/')
  }

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navlinks">
          <Nav.Link onClick={handleClick}>
            
            <button type="button" id="/">
              Home
            </button>
          </Nav.Link>
          <Nav.Link onClick={handleClick}>
            
            <button type="button" id="/trainers/">
              Shop
            </button>
          </Nav.Link>

          {cart() && (
            <Nav.Link onClick={handleClick}>
              
              <button type="button" id={`/basket/${cartId()}`}>
                Cart
              </button>
            </Nav.Link>
          )}

          {activeUserId ? (
            <>
              <Nav.Link onClick={handleSignOut}>
                
                <button type="button" id="/signout/">
                  Sign Out
                </button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={handleClick}>
                
                <button type="button" id="/auth/login/">
                  Login
                </button>
              </Nav.Link>
              <Nav.Link onClick={handleClick}>
                
                <button type="button" id="/auth/register/">
                  Register
                </button>
              </Nav.Link>
            </>
          )}
          {activeUserId === 3 && (
            <>
              <Nav.Link onClick={handleClick}>
                
                <button type="button" id="/trainer/create/">
                  Sell a Trainer
                </button>
              </Nav.Link>
              <Nav.Link onClick={handleClick}>
                
                <button type="button" id="/orders/">
                  Orders
                </button>
              </Nav.Link>
            </>
          )}

        
        </div>

        <button
            className="mobile-toggle-btn"
            onClick={() => setShowModal(true)}
          >
            Menu
          </button>
      </nav>

      
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-nav"
      >
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-nav-links">
            <Nav.Link onClick={handleClick}>
              
              <button type="button" id="/">
                Home
              </button>
            </Nav.Link>
            <Nav.Link onClick={handleClick}>
              
              <button type="button" id="/trainers/">
                Shop
              </button>
            </Nav.Link>
            {cart() && (
              <Nav.Link onClick={handleClick}>
                
                <button type="button" id={`/basket/${cartId()}`}>
                  Cart
                </button>
              </Nav.Link>
            )}
            {activeUserId ? (
              <>
                <Nav.Link onClick={handleSignOut}>
                  
                  <button type="button" id="/signout/">
                    Sign Out
                  </button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={handleClick}>
                  
                  <button type="button" id="/auth/login/">
                    Login
                  </button>
                </Nav.Link>
                <Nav.Link onClick={handleClick}>
                  
                  <button type="button" id="/auth/register/">
                    Register
                  </button>
                </Nav.Link>
              </>
            )}
            {activeUserId === 3 && (
              <>
                <Nav.Link onClick={handleClick}>
                  
                  <button type="button" id="/trainer/create/">
                    Sell a Trainer
                  </button>
                </Nav.Link>
                <Nav.Link onClick={handleClick}>
                  
                  <button type="button" id="/orders/">
                    Orders
                  </button>
                </Nav.Link>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
