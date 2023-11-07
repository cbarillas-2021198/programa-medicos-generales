import React from "react";
import { Link } from "react-router-dom";

export const MedicinaFisica = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-medicinaFisica">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Medicina Física y Rehabilitación
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
                          <h4>Maestría en Medicina Física y Rehabilitación</h4>
                          <p>
                            Una Maestría en Medicina Física y Rehabilitación es
                            un programa de postgrado diseñado para capacitar a
                            profesionales de la salud, generalmente médicos, en
                            la especialidad de medicina física y rehabilitación.
                            Esta especialidad se enfoca en el diagnóstico y
                            tratamiento de trastornos musculoesqueléticos,
                            neuromusculares y discapacidades físicas, con el
                            objetivo de mejorar la función y la calidad de vida
                            de los pacientes a través de terapias físicas y
                            rehabilitación.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal es capacitar a profesionales
                            médicos altamente especializados en la evaluación
                            precisa, diagnóstico y tratamiento de una amplia
                            gama de afecciones musculoesqueléticas y
                            neuromusculares, así como en la planificación de
                            tratamientos personalizados que incluyan terapias
                            físicas, ejercicios terapéuticos y enfoques
                            farmacológicos para mejorar la función y aliviar el
                            dolor.
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
