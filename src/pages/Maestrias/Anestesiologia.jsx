import React from "react";
import { Link } from "react-router-dom";

export const Anestesiologia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-anestesiologia">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría En Anestesiología</h2>
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
                        className="fa fa-arrow-left texto-regresar"
                        aria-hidden="true"
                      ></i>{" "}
                      Regresar
                    </Link>

                    <article id="tabs-1">
                      <div className="row" />

                      <div className="col-lg-12">
                        <div className="right-content">
                          <h4>Maestría en Anestesiología</h4>
                          <p>
                            La Maestría en Anestesiología es un programa de
                            postgrado que se centra en la capacitación de
                            médicos para convertirse en anestesiólogos. Este
                            campo de la medicina es crucial para garantizar la
                            seguridad y el bienestar de los pacientes que se
                            someten a procedimientos quirúrgicos y médicos. Los
                            anestesiólogos desempeñan un papel fundamental en la
                            atención médica al administrar anestesia y
                            asegurarse de que los pacientes estén cómodos y sin
                            dolor antes, durante y después de una intervención
                            médica.
                          </p>

                          <ul className="list">
                            <li>
                              3 años de Residencia Médica en Anestesiología + 1
                              año de EPS en Anestesiología.
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
