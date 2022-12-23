import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>Navbar
         <Link to = "/register">
                <button>Registrarse</button>
            </Link>
            <Link to = "/login">
                <button>Login</button>
            </Link>
            <Link to = "/home">
                <button>Home</button>
            </Link>
    </div>
  )
}

export default Navbar