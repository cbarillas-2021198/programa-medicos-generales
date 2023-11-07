import React from "react";
import { Fade } from "react-reveal";

export const Sedes = () => {


  const images = [
    { src: "/images/sede1.jpg", text: "Hospital General de Enfermedades" ,
    direccion: "9A Calle 7-55, Cdad. de Guatemala 01009"
    },
    
    {
      src: "/images/sede2.jpg",
      text: "Hospital  General de Accidentes Ceibal",
      direccion:"13 Ave. 1-51 zona 4 Colonia Monte Real, Mixco"
      
    },
    {
      src: "/images/sede3.jpg",
      text: "Hospital de Gineco Obstetricia Pamplona",
      direccion: " 14 Ave. Y 4ª. Calle Zona 12 Colinas de Pamplona"
    },
    {
      src: "/images/sede4.jpg",
      text: "Centro de Atención Integral de Salud Mental",
      direccion: "14 Avenida y 4ta. Calle zona 12 Colinas de Pamplona"
    },
    {
      src: "/images/sede5.jpg",
      text: "Hospital de Rehabilitación",
      direccion: "14 Avenida y 4a. Calle, Colinas de Pamplona Zona 12"
    },

    {
      src: "/images/sede6.jpg",
      text: "Hospital General Dr. Juan José Arévalo Bermejo",
      direccion: "19 avenida 7-14 zona 6 Guatemala"
    },
    {
      src: "/images/sede7.jpg",
      text: "Unidad de Consulta Externa de Enfermedades Autonomía",
      direccion: "Diagonal 12, 0-03, Zona 9"
    },
  ];


  return (

    <div className=" py-5 destination container-requisitos fondo">
      <Fade duration="2500">


      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center titulos">Sedes Escuela</h1>
          <h1 className="mb-5 text-primary"></h1>
        </div>
        <div className="row g-3">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="wow zoomIn" data-wow-delay={`0.${index + 1}s`}>
                <a className="position-relative d-block overflow-hidden">
                  <img className="img-fluid" src={image.src} alt="" />
                  <div className="image-overlay">
                    <span className="image-text">
                      {image.text}
                      <br />
                      <p  className="direccion-sede"> {image.direccion}</p>
                    </span>
                  
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Fade>
    </div>
  );
};