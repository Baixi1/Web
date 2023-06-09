import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Navbar.css';
// import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  };

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-light gradient-custom'>
        <div className='container'>
            <a className='navbar-brand' href='/'>GAME</a> 
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
            <div className="container h-100">
                {/* <div className="input-group mb-3">
                    <input type="text" className="form-control"/>
                <div className="input-group-append"><button className="btn btn-primary"><i className="fas fa-search"></i></button></div>
                </div> */}
            </div>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/Info'>Info</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/Contact'>Contact</a>
                </li>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>abc</a>
                    <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                        {user ? (
                            <>
                            <a className='dropdown-item' href='/Profile'>Profile</a>
                            <hr className="dropdown-divider"/>
                            <a className='dropdown-item' onClick={handleClick}  href='/'>Log out</a>
                            </>
                        ) : (
                            <>
                            <a className='dropdown-item' href='/Login'>Login</a>
                            <a className='dropdown-item' href='/Signup'>Signup</a>
                            </>
                        )}
                    </div>
                </li>
            </ul>
            </div>
        </div><br/><br/><br/>
        </nav>
  )
}

export default Navbar

{/* <NavDropdown title='Profile' id='basic-nav-dropdown' alignRight>
                    {user ? (
                        <>
                        <NavDropdown.Item href='/Profile'>Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleClick}> Log out </NavDropdown.Item>
                        </>
                    ) : (
                        <>
                        <NavDropdown.Item href='/Login'>Login</NavDropdown.Item>
                        <NavDropdown.Item href='/Signup'>Signup</NavDropdown.Item>
                        </>
                    )}
                </NavDropdown> */}