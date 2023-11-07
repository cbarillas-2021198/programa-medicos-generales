import React from "react";
import { Link } from "react-router-dom";

export const Pediatria = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-pediatria">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Pediatría</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="maestria-individual-content ">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs"></div>
                </div>
                <div className="col-lg-12">
                  <section className="tabs-content">
                    <Link
                      className="boton-regresar"
                      to="#"
                      onClick={() => window.history.back()}
                    >
                      <i
                        className="fa fa-arrow-left boton-regresar"
                        aria-hidden="true"
                      ></i>{" "}
                      Regresar
                    </Link>

                    <article id="tabs-1">
                      <div className="row" />
                      <div className="col-lg-12">
                        <div className="right-content">
                          <h4>Maestría en Pediatría</h4>
                          <p>
                            Una Maestría en Pediatría es un programa de
                            educación de postgrado diseñado para formar a
                            médicos especializados en el cuidado de la salud de
                            niños y adolescentes, desde recién nacidos hasta
                            jóvenes adultos.
                          </p>

                          <br />

                          <p>
                            El objetivo principal de esta maestría es
                            proporcionar una formación avanzada y especializada
                            que permita a los profesionales de la medicina
                            adquirir los conocimientos, habilidades y
                            competencias necesarias para brindar atención médica
                            integral y de alta calidad a los pacientes
                            pediátricos. Esto incluye el diagnóstico y
                            tratamiento de enfermedades pediátricas, la atención
                            preventiva, el seguimiento del crecimiento y
                            desarrollo, y la promoción de la salud en esta
                            población, contribuyendo al bienestar y la salud de
                            los niños y adolescentes.
                          </p>

                          <ul className="list">
                            <li>Duración: 3 años + 1 año de EPS.</li>
                            <li>Rotación hospitalaria</li>
                          </ul>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-3 contact">
              <div className="contact-live">
                <h5>Requisitos</h5>
                <p>
                  Poseer el Título de <b>Médico y Cirujano</b>, graduado o
                  reconocido por la Universidad de San Carlos de Guatemala,
                  graduado en Universidades legalmente autorizadas para
                  funcionar en el país o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
