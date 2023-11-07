import React from "react";
import { Link } from "react-router-dom";

export const MedicinaInterna = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-medicinaInterna">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Medicina Interna
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
                          <h4>Maestría en Medicina Interna</h4>
                          <p>
                            Una Maestría en Medicina Interna es un programa de
                            postgrado diseñado para proporcionar a médicos una
                            formación avanzada y especializada en el campo de la
                            medicina interna. La medicina interna se enfoca en
                            el diagnóstico, tratamiento y prevención de
                            enfermedades y trastornos médicos en adultos,
                            abordando una amplia variedad de condiciones
                            médicas, desde enfermedades crónicas hasta
                            enfermedades agudas y complejas.
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
