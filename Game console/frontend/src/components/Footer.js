import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Footer.css';
// import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Footer = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  };

  return (
    <footer className="footer navbar-dark bg-light gradient-custom">
        <div className="container">
            <div className="row">
                <div className="col">   
                    <a className='navbar-nav nav-link' href='/'>Home</a>
                 </div>
                <div className="col">  
                    <a className='navbar-nav nav-link' href='/Info'>Info</a>
                </div>
                <div className="col">  
                    <a className='navbar-nav nav-link' href='/Contact'>Contact</a>
                </div>
                {user ? (
                    <>
                        <div className="col">  
                            <a className='navbar-nav nav-link' href='/Profile'>Profile</a>
                        </div>
                        <div className="col">  
                            <a className='navbar-nav nav-link' onClick={handleClick} href='/'>Log out</a>
                        </div>
                            </>
                    ) : (
                        <>
                        <div className="col">  
                            <a className='navbar-nav nav-link' href='/Login'>Login</a>
                        </div>
                        <div className="col">  
                            <a className='navbar-nav nav-link' href='/Signup'>Signup</a>
                        </div>
                        </>
                    )}
            </div>
        </div>
    </footer>
  )
}

export default Footer;