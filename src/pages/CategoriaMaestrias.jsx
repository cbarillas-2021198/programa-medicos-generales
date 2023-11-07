import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Importa NavLink desde React Router

export const CategoriaMaestrias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("primera"); 

  return (
    <>
      <div className="page-heading-maestrias">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Maestrías</h2>
              <span>
                Estamos comprometidos a brindar oportunidades de aprendizaje
                excepcionales.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-categorias p">
        <h1 className="titulo-categoria text-center">Categorías</h1>
        <div className="image-container d-flex">
          <NavLink
            to="/primerasEspecialidades"
            onClick={() => setCategoriaSeleccionada("primera")}
          >
            <div className="image-categorias">
              <h3 className="subtitulo-categoria">Primeras Especialidades</h3>
            </div>
          </NavLink>
          <NavLink
            to="/segundasEspecialidades"
            onClick={() => setCategoriaSeleccionada("segunda")}
          >
            <div className="image-categorias">
              <h3 className="subtitulo-categoria text-decoration-none">Segundas Especialidades</h3>
            </div>
          </NavLink>




        </div>
      </div>
    </>
  );
};
