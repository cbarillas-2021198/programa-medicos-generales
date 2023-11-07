import React from "react";
import { Link } from "react-router-dom";

export const OncologíaMedica = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-oncologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Oncología Médica
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
                          <h4> Maestría en Oncología Médica</h4>
                          <br />
                          <p>
                            Una Maestría en Oncología Médica es un programa de
                            educación de postgrado que se enfoca en proporcionar
                            una formación avanzada y especializada a médicos en
                            el campo de la oncología, que se dedica al
                            diagnóstico, tratamiento y manejo de pacientes con
                            cáncer.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales médicos altamente competentes en
                            oncología, permitiéndoles adquirir conocimientos
                            profundos y habilidades clínicas avanzadas para
                            abordar una amplia variedad de tipos de cáncer y
                            etapas de la enfermedad. Esto incluye el uso de
                            terapias médicas como quimioterapia, inmunoterapia y
                            terapias dirigidas, así como la gestión integral de
                            pacientes con cáncer, que abarca desde el
                            diagnóstico y el tratamiento hasta el apoyo
                            psicosocial y el seguimiento a largo plazo. El
                            objetivo final es proporcionar una atención médica
                            de alta calidad a los pacientes con cáncer, mejorar
                            las tasas de supervivencia y la calidad de vida, y
                            contribuir a la investigación y el avance en el
                            campo de la oncología.
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
                  Poseer diploma de{" "}
                  <b> Especialista o Maestro en Medicina Interna </b> por la
                  Universidad de San Carlos de Guatemala, graduado en
                  Universidades legalmente autorizadas para funcionar en el país
                  o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
