import React from "react";
import { Link } from "react-router-dom";

export const Psiquiatria = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-psiquiatria">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Psiquiatría</h2>
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
                          <h4>Maestría en Psiquiatría</h4>
                          <p>
                            Una Maestría en Psiquiatría es un programa de
                            educación de postgrado que se centra en la formación
                            avanzada de médicos en el diagnóstico, tratamiento y
                            atención de trastornos mentales y emocionales en
                            pacientes de todas las edades.
                          </p>

                          <br />

                          <p>
                            El objetivo principal de esta maestría es
                            proporcionar a los profesionales de la medicina una
                            especialización en psiquiatría, capacitándolos para
                            evaluar y abordar una amplia gama de trastornos
                            psiquiátricos, brindar tratamiento farmacológico y
                            terapias psicoterapéuticas, y promover la salud
                            mental y el bienestar psicológico de los pacientes,
                            contribuyendo así a la mejora de la salud mental de
                            la población y la calidad de vida de quienes
                            enfrentan desafíos emocionales y psiquiátricos.
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
