import React from 'react';
import { Link } from "react-router-dom";

export const Radiologia = () => {
  const goBack = () => {
    window.history.back();
  };
  

  return (
    <>
      <div className="page-heading page-radiologia">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias">Maestría en Radiología e Imágenes Diagnósticas</h2>
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
                          <h4>Maestría en Radiología e Imágenes Diagnósticas</h4>
                          <p>
                            Una Maestría en Radiología e Imágenes Diagnósticas es un programa de educación de postgrado que se enfoca en la formación de profesionales de la salud, generalmente radiólogos, en el uso de tecnología avanzada de imágenes médicas para el diagnóstico, seguimiento y evaluación de enfermedades y condiciones médicas en pacientes. Este programa proporciona una capacitación especializada en la interpretación de imágenes radiológicas, como radiografías, resonancias magnéticas, tomografías computarizadas, ecografías y otros estudios de diagnóstico por imágenes, con el objetivo de contribuir a un diagnóstico preciso y mejorar la atención médica al proporcionar información valiosa para el manejo de pacientes en diversas especialidades médicas.
                          </p>

                          <br />

                          <p>
                            El objetivo principal de esta maestría es proporcionar a los profesionales de la medicina una especialización en radiología, capacitándolos para interpretar una amplia gama de imágenes médicas y contribuir al diagnóstico y tratamiento efectivos de los pacientes.
                          </p>

                          <ul className="list">
                            <li>Duración: 3 años + 1 año de EPS.</li>
                            <li>Rotación hospitalaria</li>
                          </ul>
                        </div>

                        <h5 className="text-docencia">Esquema General de la Carrera</h5>
                        <br />
                   
                        <h6>1. Área Docente</h6>
                        <br />
                          <ol>
                            <p>a. Radiología general-convencional (estudios de rutina y contrastados) </p>
                            <p>b. Ultrasonido (general, especial, intervencionista)</p>
                            <p>c. Mamografía</p>
                            <p>d. Tomografía axial computarizada (por regiones anatómicas)</p>
                            <p>e. Resonancia Magnética Nuclear (por regiones anatómicas)</p>
                            <p>f. Radioterapia</p>
                            <p>g. Medicina Nuclear</p>
                            <p>h. Radiología Intervencionista</p>
                          </ol>
                          <br />
                          <h6>2. Área Asistencial</h6>
                          <br />
                          <ol>
                            <p>a. Rotaciones en los servicios de Radiología de los Hospitales</p>
                            <p>b. Hospital General de Enfermedades (zona 9)</p>
                            <p>c. Policlinica (zona 1) </p> 
                            <p>d. Hospital General de Accidentes "Ceibal" (sede)</p>
                            <p>Hospital General Doctor Juan José Arévalo Bermejo (zona 6)</p>
                          </ol>
                          <br />
                          <h6>Área de Investigación</h6>
                          <br />
                           <p>Realización de un trabajo de investigación formal, en el área de Radiología bajo las normas APA y criterios de investigación DIGI</p>
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
                  Poseer el Título de <b>Médico y Cirujano</b>, graduado o reconocido por la Universidad de San Carlos de Guatemala, graduado en Universidades legalmente autorizadas para funcionar en el país o Universidades extranjeras reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}