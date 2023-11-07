import React from "react";
import { Link } from "react-router-dom";

export const InfectologiaAdultos = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-infectologiaAdultos">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Infectología de Adultos
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
                          <h4>Maestría en Infectología de Adultos</h4>
                          <br />
                          <p>
                            Una Maestría en Infectología de Adultos es un
                            programa de educación de postgrado diseñado para
                            proporcionar una formación avanzada y especializada
                            a médicos en el campo de la infectología,
                            centrándose en el diagnóstico, tratamiento,
                            prevención y manejo de infecciones en pacientes
                            adultos.
                          </p>{" "}
                          <br />
                          <p>
                            {" "}
                            El objetivo principal de esta maestría es formar a
                            profesionales de la medicina con un alto nivel de
                            experiencia en el abordaje de enfermedades
                            infecciosas en población adulta. Esto incluye la
                            identificación precisa de patógenos, la
                            administración de tratamientos antimicrobianos y
                            antivirales, la gestión de infecciones nosocomiales
                            y adquiridas en la comunidad, así como la promoción
                            de estrategias de prevención y control de
                            enfermedades infecciosas. El objetivo final es
                            mejorar la calidad de la atención médica y
                            contribuir a la prevención y el tratamiento efectivo
                            de las infecciones en adultos.
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
                  o Universidades extranjeras reconocidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
