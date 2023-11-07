import React from "react";
import { Link } from "react-router-dom";

export const InfectologiaPediatrica = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-infectologiaPediatrica">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Infectología Pediátrica
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
                          <h4>Maestría en Infectología Pediátrica</h4>
                          <br />
                          <p>
                            Una Maestría en Infectología Pediátrica es un
                            programa de educación de postgrado diseñado para
                            proporcionar una formación avanzada y especializada
                            a médicos en el campo de la infectología pediátrica,
                            que se enfoca en el diagnóstico, tratamiento,
                            prevención y manejo de enfermedades infecciosas en
                            niños y adolescentes.
                          </p>{" "}
                          <br />
                          <p>
                            Formar Maestros en Infectología Pediátrica, con
                            elevado nivel académico, que demuestren alto grado
                            de competencia y calidad técnica en su ejercicio
                            profesional en los campos de la clínica, la salud
                            pública y la investigación, actuando con ética,
                            responsabilidad y humanismo, satisfaciendo
                            integralmente las necesidades de salud de la
                            población guatemalteca; conscientes de la necesidad
                            de autoformación y perfeccionamiento constante, para
                            una validez y pertinencia en el ámbito nacional e
                            internacional.
                          </p>
                          <ul className="list">
                            <li>
                              {" "}
                              <b>Duración: 2 años</b>{" "}
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
                  Poseer diploma de <b>Especialista o Maestro en Pediatría</b>{" "}
                  por la Universidad de San Carlos de Guatemala, graduado en
                  Universidades legalmente autorizadas para funcionar en el país
                  o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
