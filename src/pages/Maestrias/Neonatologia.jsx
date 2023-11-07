import React from "react";
import { Link } from "react-router-dom";

export const Neonatologia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-neonatologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Neonatología</h2>
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
                          <h4>Maestría en Neonatología</h4>
                          <br />
                          <p>
                            Una Maestría en Neonatología es un programa de
                            educación de postgrado diseñado para proporcionar
                            una formación avanzada y especializada a médicos en
                            el cuidado de recién nacidos prematuros o con
                            condiciones médicas críticas en las primeras semanas
                            o meses de vida.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales de la medicina con un alto nivel de
                            experiencia en el diagnóstico, tratamiento y
                            atención de neonatos, centrándose en la gestión de
                            problemas médicos, el apoyo a los sistemas vitales y
                            el desarrollo de habilidades para proporcionar
                            atención médica integral y de alta calidad a esta
                            población vulnerable. La meta es mejorar la
                            supervivencia y el bienestar de los recién nacidos
                            en condiciones críticas y promover su salud a largo
                            plazo.
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
                  graduado o reconocido por la Universidad de San Carlos de
                  Guatemala, graduado de Universidades legalmente autorizadas
                  para funcionar en el país o Universidades extranjeras
                  reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
