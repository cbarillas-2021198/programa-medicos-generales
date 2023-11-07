import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar2Prueba = () => {
  return (
    <header>
      <div className="header-top" />
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo d-flex">
                    <a href="index.html">
                      <img
                        src="images/logo-movil.png"
                        alt="#"
                        className="logo-img"
                      />
                    </a>
                    <h6 className="texto-navbar">
                      Instituto Guatemalteco <br />{" "}
                      <span className="verde-institucional">
                        de Seguridad Social
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-9">
              <div className="header_information">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main d-flex">
                        <NavLink to="/" className="vinculos">
                          <li className="active">
                            <a href="index.html">Inicio</a>
                          </li>
                        </NavLink>

                        <NavLink to="AllMaestrias" className="vinculos">
                          <li>
                            <a href="#about"> Maestrias</a>
                          </li>
                        </NavLink>

                        <NavLink to="preguntas" className="vinculos">
                          <li>
                            <a href="#learn">Preguntas Frecuentes</a>
                          </li>
                        </NavLink>

                        <NavLink to="contacto" className="vinculos">
                          <li>
                            <a href="#important">Contacto</a>
                          </li>
                        </NavLink>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
