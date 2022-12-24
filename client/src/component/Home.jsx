import React from "react";
import { useAuth } from "../context/authContext";
 

export default function Home (){

    const {user} = useAuth();
    console.log(user);

    return(
        
        <div>
            <h1 >Home de Chocolates Cuatro Estaciones!</h1>
            <h2>El chocolate es mi pasion!</h2>
            <h3>Mi nombre es Santiago Figueroa, soy Chocolatier egresado de la escuela de Ingrid Koock. </h3>
            <h2>Mis productos</h2>
            <h3>Barras de chocolate</h3>
            <h4>Chocolate semiamargo con mani</h4>
            <h4>Chocolate con leche relleno de dulce de leche</h4>
            <h4>Chocloate marmolado</h4>
            <h4>Chocolate blanco con cookies</h4>
            <h3>Tortas</h3>
            <h4>Tortas decoradas</h4>
            <h4>Tortas de diferentes rellenos</h4>
            <h3>Bombones</h3>
            <h4>Bombones rellenos de licor</h4>
            <h4>Bombones de chocolate semiamargo rellenos de sulce de leche</h4>
            <h4>Bombones de chocolate con leche rellenos de castañas de caju</h4>
            <h4>Bombones de chocolate blanco</h4>
        </div>
        
    )
}