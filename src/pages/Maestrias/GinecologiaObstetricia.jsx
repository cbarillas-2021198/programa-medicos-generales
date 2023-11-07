import React from "react";
import { Link } from "react-router-dom";

export const GinecologiaObstetricia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-ginecologiaObstetricia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Ginecología y Obstetricia
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
                          <h4>Maestría en Ginecología y Obstetricia</h4>
                          <p>
                            Una Maestría en Ginecología y Obstetricia es un
                            programa de educación de postgrado que se enfoca en
                            proporcionar a médicos una formación avanzada y
                            especializada en el campo de la salud reproductiva
                            femenina, la atención obstétrica (embarazo y parto).
                            Su objetivo principal es preparar a los médicos para
                            convertirse en ginecólogos y obstetras altamente
                            capacitados, lo que implica la adquisición de
                            conocimientos sólidos y habilidades clínicas
                            avanzadas para ofrecer atención integral a mujeres
                            en todas las etapas de su vida, desde la
                            adolescencia hasta la menopausia, contribuyendo así
                            al bienestar y la salud de las pacientes.
                          </p>{" "}
                          <br />
                          <ul className="list">
                            <li>
                              <b>Duración: 3 años + 1 año de EPS.</b>
                            </li>
                            <li>
                              <b>Rotación hospitalaria.</b>
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
