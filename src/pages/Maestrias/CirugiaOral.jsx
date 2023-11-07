import React from "react";
import { Link } from "react-router-dom";

export const CirugiaOral = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    
    <>
      <div className="page-heading page-cirugiaOral">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Cirugía Oral </h2>
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
                      className=" boton-regresar"
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
                          <h4>Maestría en Cirugía Oral</h4>
                          <p>
                            Una Maestría en Cirugía Oral y Maxilofacial es un
                            programa de educación de posgrado que se enfoca en
                            la formación avanzada de dentistas y cirujanos
                            dentistas para que se conviertan en especialistas
                            altamente capacitados en el diagnóstico, tratamiento
                            quirúrgico y rehabilitación de afecciones que
                            afectan la boca, la mandíbula, el rostro y las
                            estructuras craneofaciales. El objetivo principal de
                            esta maestría es proporcionar a los profesionales
                            una capacitación especializada que les permita
                            adquirir conocimientos y habilidades avanzadas en
                            cirugía oral y maxilofacial, incluyendo
                            procedimientos como extracciones dentales complejas,
                            cirugía reconstructiva de la mandíbula y maxilar,
                            cirugía de implantes dentales, tratamiento de
                            fracturas faciales, cirugía ortognática (corrección
                            de deformidades faciales) y otros procedimientos
                            relacionados.
                          </p>

                          <br />

                          <p>
                            El objetivo final es formar cirujanos orales y
                            maxilofaciales altamente competentes que puedan
                            brindar atención médica integral y de alta calidad,
                            mejorando la función, la estética y la salud bucal y
                            facial de los pacientes.
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
                  Poseer el Título de <b> Médico y Cirujano</b> , graduado o
                  reconocido por la Universidad de San Carlos de Guatemala,
                  graduado en Universidades legalmente autorizadas para
                  funcionar en el país o Universidades extranjeras reconocidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
