
import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import "../Navbar.css"


function Navbar() {
  const {logout, loading} = useAuth()

const handleLogout = async() =>{
  await logout()
}

if(loading) return <h1>Cargando</h1>

  return (
    <div>
        {/* <Link to = "/register">
            <button>Registrarse</button>
        </Link>
        <Link to = "/login">
            <button>Login</button>
        </Link>
        <Link to = "/home">
            <button>Ingresar</button>
        </Link>
        <button onClick={handleLogout}>Logout</button> */}
        
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-toggler">
              <a class="navbar-brand" href="#">
              <div class="navbar-titulo">Cuatro estaciones</div>
              </a>
              <ul class="navbar-nav d-flex justify-cotent-center align-items-center">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#Chocolate es mi pasion">Chocolate es mi pasion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#mis productos">Mis productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                  </li>
                </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
      <section class="abajo"></section>
    </div>
  )
}

export default Navbar