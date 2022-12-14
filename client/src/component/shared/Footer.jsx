import React from 'react'
import "../../component/shared/footer.css"

function Footer() {
  return (
    <div><section id="contacto" class="contacto seccion-footer">
    <div class="container">
      <div class="container text-center rectangulo d-flex justify-content-evenly">
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo-footer">¡Hablémos!</div>
          <div class="col-12 col-md-4 description-footer">Contáctame para hacer un encargo o para obtener más inormacion</div>
          <div class="col-12 col-md-4">
            <a href="mailto:martinfigueroa2103@hotmail.com">
              <button type="button">
                Contacto
                <i class="bi bi-envelope-check-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="seccion-footer1 d-flex flex-column align-items-center justify-content-center">
          <div class="iconos-redes-sociales d-flex flex-wrap align-items-center jutify-content-center">
            <a href="https://twitter.com/supermacaco86" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/martin--figueroa" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/arte_cabeza/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:martinfigueroa2103@hotmail.com" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
          <div class="derechos-de-autor">Creado por Martin Figueroa (2022) &#169;</div>
        </section>
  </div>
  )
}

export default Footer