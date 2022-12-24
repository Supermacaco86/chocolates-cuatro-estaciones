
import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../../context/authContext';

function Navbar() {
  const {logout, loading} = useAuth()

const handleLogout = async() =>{
  await logout()
}

if(loading) return <h1>Cargando</h1>

  return (
    <div>
        <Link to = "/register">
            <button>Registrarse</button>
        </Link>
        <Link to = "/login">
            <button>Login</button>
        </Link>
        <Link to = "/home">
            <button>Ingresar</button>
        </Link>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar