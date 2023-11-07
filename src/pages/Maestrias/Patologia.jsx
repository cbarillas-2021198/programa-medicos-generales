import React from "react";
import { Link } from "react-router-dom";

export const Patologia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-patologia">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Patología con Énfasis en Anatomía Patológica
              </h2>
              {/* <span>
              Check out our venues, pick your choice and fill the reservation
              application.
            </span> */}
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
                          <h4>
                            Maestría en Patología con Énfasis en Anatomía
                            Patológica
                          </h4>
                          <p>
                            La Patología, es una ciencia que se dedica al
                            estudio de los cambios estructurales y funcionales
                            de las células, tejidos y órganos que son la base de
                            la enfermedad, en su práctica se conjugan: anatomía,
                            embriología, histología, fisiología, bioquímica,
                            histoquímica, bacteriología, genética y otras. El
                            conocimiento de los detalles que acompañan cada
                            entidad patológica, se puede realizar mediante una
                            necropsia clínica o médico legal, el estudio de la
                            patología quirúrgica (órganos o biopsias de éstos),
                            la citología, inmunopatología y Medicina de
                            Laboratorio.
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
