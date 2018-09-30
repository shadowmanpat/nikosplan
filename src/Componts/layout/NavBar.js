import React from 'react';
import {Link} from 'react-router-dom'
import  SignedInLinks from './SignInLinks'
import  SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to ='/' className = "brand-logo">Nikos Plan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>


        </nav>
    )
}

export default  Navbar