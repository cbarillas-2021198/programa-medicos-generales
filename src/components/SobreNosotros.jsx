import React from "react";
import { Slide } from "react-reveal";
import Fade from "react-reveal/Fade";

export const SobreNosotros = () => {
  return (
    <div>
      <div id="sobre-nosotros" class="fondo">
        <div class=" contenido-sobreNosotros">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <h6 class="section-title text-start azul-igss text-uppercase">
                Sobre Nosotros{" "}
              </h6>
              <h1 class="mb-4">
                Quienes <span class="  azul-igss">Somos</span>
              </h1>

              <p class="mb-4 text-about">
                Somos programa docente multidisciplinario para el entrenamiento
                académico de grado y postgrado en medicina y sus ramas,
                estructurado en un sistema técnico y científico de clasificación
                laboral y docente.
              </p>

              <p className="mb-4 text-about">
                Nuestro objetivo es contar con el personal médico capacitado,
                competente, idóneo y suficiente, que permita prestar servicios
                médicos de calidad, que satisfagan la creciente necesidad de
                servicios de salud de los derechohabientes del Instituto.
              </p>

              <div class="row g-3 pb-4">
                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                  <div class="border rounded p-1">
                    <div class="border rounded text-center p-4">
                      <img
                        className="reconocimiento-imagen"
                        src="images/logo-usac.png"
                        alt=""
                      />
                      <h2 class="mb-1" data-toggle="counter-up"></h2>
                      <p class="mb-0">
                        Reconocimiento académico de la Universidad de San Carlos
                        de Guatemala
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                  <div class="border rounded p-1">
                    <div class="border rounded text-center p-4">
                      <img
                        className="reconocimiento-imagen"
                        src="images/logo-mariano.png"
                        alt=""
                      />

                      <p class="mb-0">
                        Reconocimiento académico de la Universidad Mariano
                        Gálvez{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-end">
                  <Slide right>
                    <img
                      className="img-fluid rounded w-75 wow zoomIn imagen-hover"
                      data-wow-delay="0.1s"
                      src="/images/sobre-nosotros/about-1.JPG"
                      style={{ marginTop: "25%" }}
                    />
                  </Slide>
                </div>
                <div class="col-6 text-start">
                  <Slide right>
                    <img
                      className="img-fluid rounded w-100 wow zoomIn imagen-hover"
                      data-wow-delay="1"
                      src="/images/sobre-nosotros/about-2.JPG"
                    />
                  </Slide>
                </div>
                <div class="col-6 text-end">
                  <Slide right>
                    <img
                      className="img-fluid rounded w-50 wow zoomIn imagen-hover"
                      data-wow-delay="1.5s"
                      src="/images/sobre-nosotros/about-3.JPG"
                    />
                  </Slide>
                </div>
                <div class="col-6 text-start">
                  <Slide right>
                    <img
                      className="img-fluid rounded w-75 wow zoomIn imagen-hover"
                      data-wow-delay="2"
                      src="/images/galery-1.jpg"
                    />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
