import React from "react";
import { Link } from "react-router-dom";

export const Neumologia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-neumologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestria en Neumología</h2>
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
                          <h4> Maestria en Neumología</h4>
                          <br />
                          <p>
                            Una Maestría en Neumología es un programa de
                            educación de posgrado que se centra en proporcionar
                            una formación avanzada y especializada a médicos en
                            el campo de la neumología, que se dedica al
                            diagnóstico, tratamiento y manejo de trastornos
                            respiratorios y enfermedades pulmonares.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales altamente competentes en neumología,
                            permitiéndoles adquirir conocimientos profundos y
                            habilidades clínicas avanzadas para abordar una
                            amplia gama de afecciones respiratorias en pacientes
                            de todas las edades. Esto incluye trastornos como el
                            asma, la enfermedad pulmonar obstructiva crónica
                            (EPOC), la fibrosis pulmonar, las infecciones
                            respiratorias, los trastornos del sueño relacionados
                            con la respiración y otros problemas pulmonares. El
                            objetivo es proporcionar una atención médica de alta
                            calidad a los pacientes con enfermedades
                            respiratorias, mejorar la función pulmonar y la
                            calidad de vida, y contribuir a la prevención y el
                            manejo efectivo de estas afecciones.
                          </p>
                          <ul className="list">
                            <li>
                              {" "}
                              <b> Duración: 3 años</b>{" "}
                            </li>
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
                  Poseer diploma de <b> Especialista o Maestro en Pediatría </b>{" "}
                  por la Universidad de San Carlos de Guatemala, graduado en
                  Universidades legalmente autorizadas para funcionar en el país
                  o Universidades extranjeras reconocidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
