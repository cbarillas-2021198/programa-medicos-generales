import React from "react";
import { Link } from "react-router-dom";

export const Otorrinolaringología = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className="page-heading page-Otorrinolaringología">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="titulos-maestrias titulos-largos">
                Maestría en Otorrinolaringología
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
                          <h4> Maestría en Otorrinolaringología</h4>
                          <br />
                          <p>
                            La Otorrinolaringología (ORL) es la Especialidad
                            Médica quirúrgica que comprende los conocimientos
                            teóricos y prácticos para la atención de los
                            pacientes con patología del oído, fosas nasales y
                            senos paranasales, faringe y laringe, cabeza y
                            cuello.
                          </p>{" "}
                          <br />
                          <p>
                            {/* Aquí puedes agregar más información sobre la maestría en Otorrinolaringología si es necesario */}
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
                  <b>Cirujano General</b> graduado o reconocido por la
                  Universidad de San Carlos de Guatemala o graduado en las
                  universidades privadas legalmente autorizadas en el país o
                  extranjeras catalogadas como de primera clase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
