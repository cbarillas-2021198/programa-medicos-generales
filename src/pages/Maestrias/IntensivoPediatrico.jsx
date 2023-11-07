import React from "react";
import { Link } from "react-router-dom";

export const IntensivoPediatrico = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-infectologiaPediatrico">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Medicina Crítica y Cuidado Intensivo Pediátrico
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
                          <h4>
                            Maestría en Medicina Crítica y Cuidado Intensivo
                            Pediátrico
                          </h4>
                          <br />
                          <p>
                            La medicina crítica pediátrica se enfoca en el
                            diagnóstico, tratamiento y atención de pacientes
                            pediátricos con enfermedades graves, lesiones graves
                            o que requieren monitorización y apoyo vital
                            intensivo.
                          </p>{" "}
                          <br />
                          <p>
                            {" "}
                            El objetivo principal de esta maestría es formar a
                            profesionales de la medicina con un alto nivel de
                            experiencia en la evaluación y gestión de pacientes
                            pediátricos en estado crítico, incluyendo la
                            administración de terapias avanzadas, procedimientos
                            invasivos y la toma de decisiones clínicas cruciales
                            específicas para esta población. La meta es brindar
                            atención de alta calidad a niños y adolescentes en
                            situaciones críticas y contribuir a la mejora de los
                            resultados clínicos y la supervivencia en este grupo
                            de pacientes.
                          </p>
                          <ul className="list">
                            <li>
                              {" "}
                              <b>Duración: 3 años</b>{" "}
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
                  Pediatra graduado o reconocido por la Universidad de San
                  Carlos de Guatemala o graduado en las universidades privadas
                  legalmente autorizadas en el país o extranjeras catalogadas
                  como de primera clase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
