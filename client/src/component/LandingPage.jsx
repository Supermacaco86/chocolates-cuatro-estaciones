import React from "react";
import {Link} from "react-router-dom";
//import "../Estilos/landingPage.css" 

export default function LandingPage (){
    return(
        
        <div>
            <h1 >Bienvenido a Chocolates Cuatro estaciones!</h1>
            <Link to = "/home">
                <button>Ingresar</button>
            </Link>
            <Link to = "/register">
                <button>Registrarse</button>
            </Link>
            <Link to = "/login">
                <button>Login</button>
            </Link>
        </div>
        
    )
}