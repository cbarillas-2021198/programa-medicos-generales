import React from "react";
import { Link } from "react-router-dom";

export const Urología = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-urologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Urología</h2>
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
                          <h4> Maestría en Urología</h4>
                          <br />
                          <p>
                            Una Maestría en Urología es un programa de educación
                            de postgrado que se centra en proporcionar una
                            formación avanzada y especializada a médicos en el
                            campo de la urología, que se ocupa del diagnóstico,
                            tratamiento y cirugía de trastornos relacionados con
                            el sistema urinario y el sistema reproductor
                            masculino.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales altamente competentes en urología,
                            permitiéndoles adquirir conocimientos profundos y
                            habilidades clínicas avanzadas para abordar una
                            amplia gama de afecciones urológicas en pacientes de
                            todas las edades. Esto incluye el manejo de
                            enfermedades urológicas como cálculos renales,
                            infecciones del tracto urinario, trastornos
                            prostáticos, cáncer de riñón, vejiga y próstata,
                            disfunción eréctil, infertilidad masculina y cirugía
                            urológica, con el objetivo de mejorar la salud y la
                            calidad de vida de los pacientes a través de una
                            atención integral y especializada en urología.
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
                  <b>Ser Médico y Cirujano</b> graduado o incorporado a la
                  Universidad de San Carlos de Guatemala o graduado en las
                  universidades privadas legalmente autorizadas del país.
                  Acreditar postgrado en Cirugía General.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
