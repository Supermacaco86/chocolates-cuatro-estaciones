import React from "react";
import "../component/LandingPage.css"


export default function LandingPage (){
    return(
        
        <div>
          {/* Marca */}
        <section class="seccion-oscura">
        <div class="marca">Chocolates Cuatro Estaciones</div>
          </section>  
            {/* Carrusel */}
        <section class="seccion-oscura">
          <div id="carouselExample" class="carousel slide ">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="image\chocolate-cake-with-red-and-black-currant.jpg" class="d-block w-100" alt="..."/>
                <p class="carousel-texto">Chocolates Cuatro estaciones</p>             
              </div>
              <div class="carousel-item">
                <img src="image\flat-lay-delicious-chocolate-tablets-arrangement.jpg" class="d-block w-100" alt="..."/>
                <p class="carousel-texto">Chocolates Cuatro estaciones</p>
              </div>
              <div class="carousel-item">
                <img src="image\top-view-of-delicious-alfajores-with-copy-space.jpg" class="d-block w-100" alt="..."/>
                <p class="carousel-texto">Chocolates Cuatro estaciones</p>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

            <section className="section1 seccion-clara">
                <div>
                    <h1 className="titulo">Bienvenido a Chocolates Cuatro estaciones!</h1>
                    <h2 className="subtitulo">El chocolate es mi pasion!</h2>
                    <h3 className="texto">Mi nombre es Santiago Figueroa, soy Chocolatier egresado de la escuela de Ingrid Koock. El camino del chocolate puede tomar una gran cantidad de diferentes direcciones. En mi caso, elejí para desarrollarme profecionalmente tres bien diferencadas. La primera fue la produccion de barras y bombones, de diferentes sabores y distintos rellenos siempre en la busqueda de maridajes originales y novedosos. El segundo camino que encontré en la manipulacion del chocolate fue el de utilizarlo como baño y fue ahí donde comenzé a producir alfajores de linea premium. Y por último y quizas el que demandó ampliar mis estudios y conocimientos es el que me permitió desarrollar mi tortas. Trabajadas de manera personalizada para cada cliente en particular. </h3>
                </div>
            </section>
            
            <h2>Mis productos</h2>
            <h3>Barras de chocolate</h3>
            <h4>Chocolate semiamargo con mani</h4>
            <h4>Chocolate con leche relleno de dulce de leche</h4>
            <h4>Chocolate marmolado</h4>
            <h4>Chocolate blanco con cookies</h4>
            <h3>Tortas</h3>
            <h4>Tortas decoradas</h4>
            <h4>Tortas de diferentes rellenos</h4>
            <h3>Bombones</h3>
            <h4>Bombones rellenos de licor</h4>
            <h4>Bombones de chocolate semiamargo rellenos de dulce de leche</h4>
            <h4>Bombones de chocolate con leche rellenos de castañas de caju</h4>
            <h4>Bombones de chocolate blanco</h4>
        </div>
        
    )
}