import React from "react";
import { Link } from "react-router-dom";

export const Nefrologia = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="page-heading page-nefrologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Nefrología</h2>
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
                          <h4>Maestría en Nefrología</h4>
                          <br />
                          <p>
                            Una Maestría en Nefrología es un programa de
                            educación de postgrado que se enfoca en proporcionar
                            una formación avanzada y especializada a médicos en
                            el campo de la nefrología, que es la rama de la
                            medicina dedicada al diagnóstico y tratamiento de
                            enfermedades relacionadas con los riñones y el
                            sistema urinario.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales altamente capacitados en nefrología,
                            permitiéndoles adquirir conocimientos profundos y
                            habilidades clínicas avanzadas para abordar una
                            amplia gama de trastornos renales y urológicos en
                            pacientes de todas las edades. Esto incluye la
                            gestión de enfermedades renales crónicas, la
                            diálisis, el trasplante renal y la prevención de
                            enfermedades renales, con el fin de mejorar la
                            calidad de vida de los pacientes y contribuir a la
                            reducción de la morbilidad y la mortalidad asociada
                            con trastornos renales.
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
                  <b>Pediatra</b> graduado o reconocido por la Universidad de
                  San Carlos de Guatemala o graduado en las universidades
                  privadas legalmente autorizadas en el país o extranjeras
                  catalogadas como de primera clase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
