import React from "react";
import {Link} from "react-router-dom";
//import "../Estilos/landingPage.css" 

export default function landingPage (){
    return(
        
        <div>
            <h1 >Bienvenido a Chocolates Cuatro estaciones!</h1>
            <Link to = "/home">
                <button>Ingresar</button>
            </Link>
        </div>
        
    )
}