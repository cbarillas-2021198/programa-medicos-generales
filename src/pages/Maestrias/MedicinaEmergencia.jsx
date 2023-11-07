import React from "react";
import { Link } from "react-router-dom";

export const MedicinaEmergencia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-medicinaEmergencia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Medicina de Emergencia
              </h2>
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
                          <h4>Maestría en Medicina de Emergencia</h4>
                          <p>
                            Una Maestría en Medicina de Emergencia es un
                            programa de postgrado que brinda una formación
                            especializada a médicos con el objetivo de
                            capacitarlos en la atención médica de emergencia,
                            diagnóstico y tratamiento rápido y eficaz de
                            afecciones críticas o traumáticas en pacientes de
                            todas las edades.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar
                            profesionales altamente competentes que puedan
                            liderar equipos multidisciplinarios en situaciones
                            de emergencia, brindar atención médica de alta
                            calidad, tomar decisiones rápidas y basadas en
                            evidencia, así como coordinar la gestión de
                            situaciones médicas críticas, contribuyendo
                            significativamente a la reducción de la
                            morbimortalidad en casos de emergencia y
                            catástrofes.
                          </p>
                          <ul className="list">
                            <li>
                              <b>Duración: 3 años + 1 año de EPS.</b>
                            </li>
                            <li>
                              <b>Rotación hospitalaria</b>
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
