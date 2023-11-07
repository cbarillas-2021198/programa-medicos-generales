import React from "react";
import { Link } from "react-router-dom";

export const Ginecologia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-ginecologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Ginecología Oncológica
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
                          <h4> Maestría en Ginecología Oncológica</h4>
                          <br />
                          <p>
                            Una Maestría en Ginecología Oncológica es un
                            programa de educación de posgrado que se centra en
                            proporcionar una formación avanzada y especializada
                            a médicos en el campo de la ginecología oncológica,
                            que se dedica al diagnóstico, tratamiento y manejo
                            de trastornos oncológicos en el área de ginecología.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales altamente competentes en ginecología
                            oncológica, permitiéndoles adquirir conocimientos
                            profundos y habilidades clínicas avanzadas para
                            abordar una amplia gama de afecciones oncológicas en
                            pacientes de todas las edades. Esto incluye
                            trastornos como el cáncer de mama, cáncer de ovario,
                            cáncer de útero, entre otros. El objetivo es
                            proporcionar una atención médica integral y
                            especializada en ginecología oncológica, así como
                            contribuir a la investigación y el avance en el
                            campo de la oncología.
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
                  Poseer diploma de <b>Especialista o Maestro en Ginecología</b>{" "}
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
