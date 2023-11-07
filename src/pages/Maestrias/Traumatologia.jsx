import React from 'react';
import { Link } from "react-router-dom";

export const Traumatologia = () => {
  
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="page-heading page-traumatologia">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Ortopedia y Traumatología</h2>
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
                          <h4>Maestría en Ortopedia y Traumatología</h4>
                          <p>
                            Una Maestría en Ortopedia y Traumatología es un programa de educación de postgrado diseñado para formar a médicos especializados en la prevención, diagnóstico, tratamiento y rehabilitación de trastornos musculoesqueléticos, lesiones traumáticas y afecciones ortopédicas en pacientes de todas las edades.
                          </p>

                          <br />

                          <p>El objetivo principal de esta maestría es proporcionar una formación avanzada y especializada en ortopedia y traumatología, que permita a los profesionales adquirir conocimientos profundos y habilidades clínicas avanzadas en la atención de pacientes con problemas en el sistema musculoesquelético. Esto incluye la realización de cirugías ortopédicas cuando sea necesario, la gestión de lesiones traumáticas, la rehabilitación y el cuidado continuo de los pacientes para restaurar la función y mejorar la calidad de vida. El objetivo final es ofrecer atención médica de alta calidad y mejorar la salud y la movilidad de los pacientes con afecciones musculoesqueléticas.</p>

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
                  Poseer el Título de <b>Médico y Cirujano</b>, graduado o reconocido por la Universidad de San Carlos de Guatemala, graduado en Universidades legalmente autorizadas para funcionar en el país o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}