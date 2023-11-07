import React from "react";
import { Link } from "react-router-dom";

export const Neurocirugia = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-neurocirugia">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Neurocirugía</h2>
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
                          <h4> Maestría en Neurocirugía</h4>
                          <br />
                          <p>
                            Una Maestría en Neurocirugía es un programa de
                            educación de postgrado que se centra en proporcionar
                            una formación avanzada y especializada a médicos en
                            el campo de la neurocirugía, que se dedica al
                            diagnóstico, tratamiento y manejo de trastornos del
                            sistema nervioso central y periférico.
                          </p>{" "}
                          <br />
                          <p>
                            El objetivo principal de esta maestría es formar a
                            profesionales altamente competentes en neurocirugía,
                            permitiéndoles adquirir conocimientos profundos y
                            habilidades clínicas avanzadas para abordar una
                            amplia gama de afecciones neurológicas en pacientes
                            de todas las edades. Esto incluye trastornos como
                            tumores cerebrales, lesiones de la médula espinal,
                            aneurismas cerebrales, epilepsia, entre otros. El
                            objetivo es mejorar la calidad de vida de los
                            pacientes al proporcionar una atención médica
                            integral y especializada en neurocirugía, así como
                            contribuir a la investigación y el avance en el
                            campo de la neurociencia médica.
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
                  <b>Especialista o Maestro en Neurocirugía </b> por la
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
