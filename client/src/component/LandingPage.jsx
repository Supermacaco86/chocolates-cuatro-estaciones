import React from "react";
import "../component/LandingPage.css"


export default function LandingPage (){
    return(
        
        <div>
            {/* Carrusel */}
        <section>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="image\chocolate-cake-with-red-and-black-currant.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption  d-md-block">
              <h5 class="carousel-titulo1">Tortas</h5>
              <p>Some representative placeholder content for the first slide.</p>
             </div>
          </div>
          <div class="carousel-item">
            <img src="image\flat-lay-delicious-chocolate-tablets-arrangement.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-md-block">
              <h5 class="carousel-titulo2">Chocolates</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="image\top-view-of-delicious-alfajores-with-copy-space.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-md-block">
              <h5 class="carousel-titulo3">Alfajores</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
       </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </section>
        <section class="intermedia"></section>
        <section class="intermedia1"></section>

        <section id="Chocolate es mi pasion" className="seccion-clara">
          <div className="chocolate-es-mi-pasion">
            <h1 className="titulo">Bienvenido a Chocolates Cuatro estaciones!</h1>
            <h2 className="subtitulo">El chocolate es mi pasion!</h2>
            <h3 className="texto">Mi nombre es Santiago Figueroa, soy Chocolatier egresado de la escuela de Ingrid Koock. El camino del chocolate puede tomar una gran cantidad de diferentes direcciones. En mi caso, elej?? para desarrollarme profecionalmente tres bien diferencadas. La primera fue la produccion de barras y bombones, de diferentes sabores y distintos rellenos siempre en la busqueda de maridajes originales y novedosos. El segundo camino que encontr?? en la manipulacion del chocolate fue el de utilizarlo como ba??o y fue ah?? donde comenz?? a producir alfajores de linea premium. Y por ??ltimo y quizas el que demand?? ampliar mis estudios y conocimientos es el que me permiti?? desarrollar mis tortas. Trabajadas de manera personalizada para cada cliente en particular. </h3>
          </div>
        </section>
            
        {/* <section id="mis productos" class="mis-productos">
          <h2>Mis productos</h2>
            <div class="container text-center">
              <div class="row">
                <div class="columna col-12 col-md-4">
                  <img src="image\flat-lay-delicious-chocolate-tablets-arrangement.jpg" class="d-block w-100" alt="..."/>
                  <h3>Barras de chocolate</h3>
                  <h4>Chocolate semiamargo con mani</h4>
                  <h4>Chocolate con leche relleno de dulce de leche</h4>
                  <h4>Chocolate marmolado</h4>
                  <h4>Chocolate blanco con cookies</h4>
                </div>     
                <div class="columna col-12 col-md-4">
                  <img src="image\chocolate-cake-with-red-and-black-currant.jpg" class="d-block w-100" alt="..."/>
                  <h3>Tortas</h3>
                  <h4>Tortas decoradas</h4>
                  <h4>Tortas de diferentes rellenos</h4>
                </div>
                <div class="columna col-12 col-md-4">
                  <img src="image\top-view-of-delicious-alfajores-with-copy-space.jpg" class="d-block w-100" alt="..."/>
                  <h3>Bombones</h3>
                  <h4>Bombones rellenos de licor</h4>
                  <h4>Bombones de chocolate semiamargo rellenos de dulce de leche</h4>
                  <h4>Bombones de chocolate con leche rellenos de casta??as de caju</h4>
                  <h4>Bombones de chocolate blanco</h4>
                </div>
              </div>
            </div>
        </section> */}
      </div>
        
    )
}