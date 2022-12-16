import React from "react";
import { useAuth } from "../context/authContext";
 

export default function Home (){

    const {user} = useAuth();
    console.log(user);

    return(
        
        <div>
            <h1 >Bienvenido al Home de Chocolates Cuatro Estaciones!</h1>
        </div>
        
    )
}