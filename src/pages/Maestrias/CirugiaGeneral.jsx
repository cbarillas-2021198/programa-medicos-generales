import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/cirugiaoral.jpg";

export const CirugiaGeneral = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-cirugiaGeneral">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Cirugía General</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="maestria-individual-content ">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 clearfix">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    
                  </div>
                  
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
                          <h4>Maestría en Cirugía General</h4>
                          <p>
                            El objetivo fundamental es proporcionar a los
                            médicos una formación altamente especializada y
                            competente en cirugía, enfocándose en el desarrollo
                            de habilidades quirúrgicas avanzadas, la seguridad
                            del paciente, la aplicación de tecnología moderna,
                            la ética médica y el profesionalismo, la
                            comunicación efectiva, el trabajo en equipo, y la
                            contribución a la salud comunitaria, con el fin de
                            preparar a cirujanos generales que puedan ofrecer
                            atención quirúrgica de alta calidad, garantizar la
                            seguridad de los pacientes y mantenerse actualizados
                            en un campo médico en constante evolución.
                          </p>

                          <ul className="list">
                            <li>Duración: 4 años + 1 año de EPS.</li>
                          </ul>

                          <h1 className="tittle">Requisitos</h1>
                          <ol className="lista-fuera">
                            <li>
                              Poseer el Título de Médico y Cirujano, graduado o
                              reconocido por la Universidad de San Carlos de
                              Guatemala, graduado en Universidades legalmente
                              autorizadas para funcionar en el país o
                              Universidades extranjeras reconocidas.
                            </li>
                            <li>
                              Presentar la documentación que acredite las
                              cualidades y que para el efecto estipule la
                              convocatoria respectiva.
                            </li>
                            <li>Sustentar el proceso de selección.</li>
                            <li>
                              Compromiso de dedicación exclusiva a los estudios
                              de postgrado.
                            </li>
                            <li>
                              Colegiado activo en el caso de Nacionales o
                              colegiación transitoria, para extranjeros.
                            </li>
                            <li>
                              Presentar certificación de estar apto física y
                              mentalmente para realizar estudios de postgrado,
                              extendida de preferencia por la Unidad de Salud de
                              la Universidad de San Carlos de Guatemala.
                            </li>
                            <li>
                              Cumplir con el pago de cuotas que establece la ley
                              universitaria dentro del plazo fijado en el
                              calendario académico.
                            </li>
                            <li>
                              Cumplir con el trámite administrativo de
                              inscripción en el departamento de Registro y
                              Estadística de la Universidad de San Carlos de
                              Guatemala de acuerdo a los requisitos que ese
                              departamento determine y reinscribirse cada año
                              hasta concluir el programa.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>

            <div className="col-lg-3 contact clearfix">
              <div className="contact-live">
                <h5>Módulos de Aprendizaje</h5>

                <ul className="lista-cirugia">
                  <li>Introducción a la Cirugía General</li>
                  <li>Cabeza y cuello</li>
                  <li>Tórax, cardiovascular – esófago</li>
                  <li>Gastro duodenal - bazo</li>
                  <li>Hígado, vías biliares y páncreas</li>
                  <li>Intestino Delgado, colon – recto y ano</li>
                  <li>Hernias</li>
                  <li>Vascular periférico – Trasplante renal</li>
                  <li>Gineco-urológica</li>
                  <li>Cuidado Crítico en Cirugía</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};