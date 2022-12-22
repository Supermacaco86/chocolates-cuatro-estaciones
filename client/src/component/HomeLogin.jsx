import React from "react";
import { useAuth } from "../context/authContext";
 

export default function HomeLogin (){

    const {user} = useAuth();
    console.log(user);

    return(
        
        <div>
            <h1 >Bienvenido al Home logueado de Chocolates Cuatro Estaciones!</h1>
        </div>
        
    )
}