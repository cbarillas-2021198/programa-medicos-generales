import React from "react";
import { Link } from "react-router-dom";

export const IntensivoAdulto = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-intensivoAdulto">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Medicina Crítica y Cuidado Intensivo del Adulto
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
                          <h4>
                            Maestría en Medicina Crítica y Cuidado Intensivo del
                            Adulto
                          </h4>
                          <br />
                          <p>
                            Una Maestría en Medicina Crítica y Cuidado Intensivo
                            del Adulto es un programa de educación de postgrado
                            que se enfoca en proporcionar una formación avanzada
                            y especializada a médicos en el campo de la medicina
                            crítica y el cuidado intensivo de pacientes adultos.
                          </p>{" "}
                          <br />
                          <p>
                            La medicina crítica se centra en el diagnóstico,
                            tratamiento y atención de pacientes con enfermedades
                            graves, lesiones graves o que requieren
                            monitorización y apoyo vital intensivo. El objetivo
                            principal de esta maestría es formar a profesionales
                            de la medicina con un alto nivel de experiencia en
                            la evaluación y gestión de pacientes en estado
                            crítico, incluyendo la administración de terapias
                            avanzadas, procedimientos invasivos y la toma de
                            decisiones clínicas cruciales. La meta es brindar
                            atención de alta calidad a pacientes en situaciones
                            críticas y contribuir a la mejora de los resultados
                            clínicos y la supervivencia en este grupo de
                            pacientes.
                          </p>
                          <ul className="list">
                            <li>
                              {" "}
                              <b> Duración: 2 años</b>{" "}
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
                  Poseer diploma de{" "}
                  <b>
                    {" "}
                    Especialista o Maestro en Medicina Interna, Cirugía General
                    o Anestesiología
                  </b>
                  , realizado en una institución universitaria, nacional o
                  extranjera de reconocido prestigio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
