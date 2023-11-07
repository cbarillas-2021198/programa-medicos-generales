import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Fade, Zoom, Slide } from "react-reveal";

export const Requisitos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setBodyOverflowHidden(true);
  };

  const openModal2 = () => {
    setModalIsOpen2(true);
    setBodyOverflowHidden(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalIsOpen2(false);
    setBodyOverflowHidden(false);
  };

  // Maneja la adición/eliminación de la clase al <body>
  useEffect(() => {
    if (bodyOverflowHidden) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [bodyOverflowHidden]);
  return (
    <div className="container-fluid fondo2 contenido-requisitos ">
      <div className="row   d-flex bg-offer justify-content-center align-items-center ">
        <div className="col-md-12 col-lg-12  ">
          <div className="ms-lg-5 ps-lg-5 me-lg-5 pe-lg-5 ">
            <Fade  duration={2500}>
              <div
                className="text-center text-lg-start wow fadeInUp text-primary"
                data-wow-delay="0.1s"
              >
                <h6 className="azul-igss text-uppercase text-center subtitulo-requisitos  ">
                  Optar a una maestría
                </h6>
                <h1 className="mb-4  titulo-requisitos">
                  Requisitos Generales
                </h1>
              </div>
            </Fade>

            <Fade duration={2500}>
              <div className="row">
                <div className="col-lg-6 ">
                  <div
                    className="wow fadeInUp  "
                    data-wow-delay="0.1s"
                  >
                    <div className=" p-2  item-requisitos ">
                     
                      <h4 className="mb-3 mt-4 titulo-interior-requisitos ms-3 me-3">
                        Médicos Nacionales o Nacionalizados
                      </h4>
                      <p className="text-justify  texto-interior-moviles ms-4 me-3 text-black">
                       
                       Casos Especiales: Podrán participar de manera
                        condicionada:
                      </p>

                      <ul className="text-justify list-none">
                        {" "}
                        {/* Aplicar justificación de texto */}
                        <li className="  ms-3 me-3">
                          <p className="texto-interior-moviles"> Médico graduado en el año 2023 que
                          presente Acta de Graduación si no cuentan con Título
                          impreso.</p>
                        </li>
                        <li className="text-secondary texto-interior-moviles ms-3 me-3 text-black">
                          <p className="texto-interior-moviles "> Graduando de Licenciatura de
                          Medicina en Guatemala que presente certificación
                          oficial de cierre de pensum con fecha de graduación
                          anterior a diciembre de 2023.</p>
                        </li>
                      </ul>

                      <button
                        onClick={openModal}
                        className="btn   btn-requisitos "
                      >
                        Ver Requisitos
                        <i className="fa fa-arrow-right   ms-2 ml-2 "></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="wow fadeInUp " data-wow-delay="0.1s">
                    <div
                      className="item-requisitos p-2"
                      data-wow-delay="0.1s"
                    >
                     
                      <h4 className="mb-3 mt-4 titulo-interior-requisitos ms-3 me-3">
                        Médicos Extranjeros
                      </h4>
                      <p className="text-justify texto-interior-moviles ms-3 me-3 ">
                     
                        Los Documentos de los numerales 2, 4, 5 y 7 deben estar
                        legalizados por el correspondiente funcionario
                        Diplomático o Consular de Guatemala (pases legales o
                        apostillado). El MSPAS podrá admitir médicos no
                        guatemaltecos que realizarán contrato como estudiantes
                        de universidad que avala sus estudios, el cual no
                        conlleva remuneración (Acuerdo Ministerial 259-2019). El
                        Instituto Guatemalteco de Seguridad Social incluye en el
                        proceso de selección a médicos extranjeros que estén
                        nacionalizados guatemaltecos que cuenten con DPI y
                        colegiado médico de Guatemala.
                      </p>

                      <button
                        onClick={openModal2}
                        className="btn bg-white  mt-2 btn-requisitos"
                      >
                        Ver Requisitos
                        <i className="fa fa-arrow-right  ms-2 ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        appElement={document.getElementById("root")}
        className={"Modal"}
        style={{ maxHeight: "30vh", overflowY: "auto" }}
      >
        <div className="modal-content">
          <Zoom>
            <div className="modal-header">
              <div className="text-white d-flex justify-content-between align-items-center px-3 py-2">
                <i className="fa fa-book fa-1x bg-azul"></i>
                <h4 className="mb-0 bg-azul text-black ms-lg-2 ps-lg-2 text-requisitos">
                  Requisitos
                </h4>
              </div>
              <i
                onClick={closeModal}
                className="fa fa-times  close"
                aria-label="Cerrar"
              ></i>
            </div>
            <div
              className="modal-body"
              style={{ maxHeight: "85vh", overflowY: "auto" }}
            >
              <div className="column" id="main">
                <h1>Médicos Nacionales o Nacionalizados</h1>
                <br />
                <ol className="lista-requisitos">
                  <li>Solicitud de ingreso USAC (formulario oficial 2023)</li>
                  <li>Título de médico y cirujano.</li>
                  <li>Documento personal de identificación (DPI).</li>
                  <li>
                    Certificación General de estudios de grado para Primera
                    maestría o especialidad y certificación general de estudios
                    de postgrado para Segunda Maestría o especialidad.
                  </li>
                  <li>
                    Constancia de ser miembro del colegio de médicos y cirujanos
                    de Guatemala (activo mínimo hasta diciembre de 2023).
                  </li>
                  <li>
                    Curriculum Vitae de acuerdo a la guía del orden de
                    presentación del expediente.
                  </li>
                  <li>
                    Certificado reciente de buen estado de la salud física y
                    mental.
                  </li>
                </ol>
                <br />
                <button
                  onClick={closeModal}
                  className="btn btn-primary close-modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal}
        appElement={document.getElementById("root")}
        className={"Modal"}
        style={{ maxHeight: "30vh", overflowY: "auto" }}
      >
        <div className="modal-content">
          <Zoom>
            <div className="modal-header">
              <div className="text-white d-flex justify-content-between align-items-center px-3 py-2">
                <i className="fa fa-book bg-azul fa-1x"></i>
                <h4 className="mb-0 bg-azul text-black  ms-lg-2 text-requisitos">
                  Requisitos
                </h4>
              </div>
              <i
                onClick={closeModal}
                className="fa fa-times btn-close"
                aria-label="Cerrar"
              ></i>
            </div>

            <div
              className="modal-body"
              style={{ maxHeight: "85vh", overflowY: "auto" }}
            >
              <div className="column" id="main">
                <h1>Médicos Extranjeros</h1>
                <br />
                <ol className="lista-requisitos">
                  <li> p Solicitud de ingreso USAC (formulario oficial 2023)</li>
                  <li>Título de médico y cirujano (con apostille)</li>
                  <li>Pasaporte Vigente (hoja de datos personales)</li>
                  <li>
                    Certificación General de estudios de grado para Primera
                    maestría o especialidad y certificación general de estudios
                    de postgrado para Segunda Maestría o especialidad (con
                    apostille)
                  </li>
                  <li>
                    Constancia que indique que estar habilitado en forma legal
                    para ejercer de profesión universitaria en su país en el
                    2023 (con apostille)
                  </li>
                  <li>
                    Curriculum Vitae de acuerdo a la guía del orden de
                    presentación del expediente.
                  </li>
                  <li>
                    Constancia Oficial de ayuda económica de institución estatal
                    o privada por el tiempo que dure el programa de residencia
                    médica
                  </li>
                  <li>
                    Certificado reciente de buen estado de la salud física y
                    mental
                  </li>
                </ol>
                <br />
                <button
                  onClick={closeModal}
                  className="btn btn-primary close-modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </Modal>
    </div>
  );
};
