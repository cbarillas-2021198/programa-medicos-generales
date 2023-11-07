import React from "react";
import { Zoom } from "react-reveal";



export const Banner  = () => {

  const scroll = () => {
    const aboutSection = document.getElementById("sobre-nosotros");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <div id="banner" className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <h4 className="text-white">Programa</h4>
                <h2>Médicos Generales y Especialistas</h2>
                <div className="btn-sobreNosotros">
                  <a  href="#sobre-nosotros" onClick={scroll}>
                    Sobre Nosotros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

