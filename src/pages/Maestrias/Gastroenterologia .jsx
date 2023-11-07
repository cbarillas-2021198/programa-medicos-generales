import React from 'react';
import { Link } from "react-router-dom";

export const Gastroenterologia = () => {

  const goBack = () => {
    window.history.back();
  };
  

  return (
    <>
      <div className="page-heading page-gastroenterologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias titulos-largos">Maestría en Gastroenterología y Endoscopía Digestiva</h2>
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
                          <h4> Maestría en Gastroenterología y Endoscopía Digestiva</h4>
                          <br />
                          <p>
                            Una Maestría en Gastroenterología y Endoscopía Digestiva es un programa de educación de posgrado que se centra en proporcionar una formación avanzada y especializada a médicos en el campo de la gastroenterología y la endoscopía digestiva, que se dedica al diagnóstico, tratamiento y manejo de trastornos gastrointestinales y enfermedades del sistema digestivo.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a profesionales altamente competentes en gastroenterología y endoscopía digestiva, permitiéndoles adquirir conocimientos profundos y habilidades clínicas avanzadas para abordar una amplia gama de afecciones gastrointestinales en pacientes de todas las edades. Esto incluye trastornos como la enfermedad inflamatoria intestinal, la enfermedad de reflujo gastroesofágico, las enfermedades hepáticas y pancreáticas, los trastornos del tracto digestivo superior e inferior, entre otros. El objetivo es proporcionar una atención médica de alta calidad a los pacientes con enfermedades gastrointestinales, mejorar la función digestiva y la calidad de vida, y contribuir al diagnóstico y tratamiento efectivo de estas afecciones.
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
                  Poseer diploma de <b>Especialista o Maestro en Gastroenterología</b> por la Universidad de San Carlos de Guatemala, graduado en Universidades legalmente autorizadas para funcionar en el país o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};