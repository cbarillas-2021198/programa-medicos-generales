import React from 'react';
import { Link } from "react-router-dom";

export const Reumatología = () => {
  
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="page-heading page-reumatologia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">
                Maestría en Reumatología de Adultos
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
                          <h4>Maestría en Reumatología de Adultos</h4>
                          <br />
                          <p>
                            La Reumatología es la rama de la Medicina Interna dedicada al estudio de los trastornos clínicos no traumáticos  del aparato locomotor y del tejido conectivo. Abarca un conjunto de entidades clínicas conocidas como enfermedades reumáticas que pueden ser localizadas en articulaciones, huesos, músculos, tendones y fascias (Artrosis, Artritis, dolor lumbar crónico, osteoporosis, tendinitis) o tener expresión sistémica (enfermedades del tejido conectivo: Lupus, esclerodermia, polimiositis y fibromialgia).
                          </p>{" "}
                          <br />
                          <p>
                            Formar Maestros en Reumatología con elevado nivel académico, que demuestren alto grado de competencia y calidad técnica, para la investigación, prevención, diagnóstico, tratamiento y rehabilitación de los pacientes con enfermedades reumáticas, actuando con ética, responsabilidad y humanismo satisfaciendo integralmente las necesidades de salud de la población guatemalteca, conscientes de la necesidad de autoformación y perfeccionamiento constante, para una validez y pertinencia en el ámbito nacional e internacional.
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
                  Poseer diploma de <b>Especialista o Maestro en Medicina Interna</b> graduado o reconocido por la Universidad de San Carlos de Guatemala, graduado en Universidades legalmente autorizadas para funcionar en el país o en Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};