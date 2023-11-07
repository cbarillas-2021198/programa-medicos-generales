import React, { useEffect, useState } from "react";

import {Primeras} from "./PrimerasEspeciliadadesData"
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

const removeAccents = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const PrimerasEspecialidades = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);
  const [filteredItems, setFilteredItems] = useState(Primeras); 

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    filterItemsByName(value);
  };

  const filterItemsByName = (search) => {
    const updatedItems = Primeras.filter(
      (item) =>
        item.category === "primera" && removeAccents(item.maestria).includes(removeAccents(search))
    );
    setFilteredItems(updatedItems);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="page-heading-maestrias">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  maestrias-banner text-center">
              <h2>Primeras Especialidades</h2>
              <span className="">
                Estamos comprometidos a brindar oportunidades de aprendizaje excepcionales.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-maestrias todas-maestrias">
        <div className="row">
          <div className="col-lg-3">
            <div className="container-buscador">
              <form id="subscribe" onSubmit={handleSearchSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="search-heading">
                      <div className="buscador-input">
                        <input
                          type="text"
                          placeholder="Buscar"
                          className="input"
                          value={searchValue}
                          onChange={handleSearchChange}
                        />
                        <i className="fa fa-search lupa-buscar" type="submit" id="form-submit"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row">
              {filteredItems.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Zoom>
                    <div className="maestrias-item d-flex flex-column h-100">
                      <div className="thumb">
                        <img src={item.image} alt="" />
                      </div>

                      <div className="contenido-abajo" style={{ maxHeight: "350px", overflowY: "auto" }}>
                        <span className="texto-maestria">{item.categoryMaestria}</span>
                        <h4>{item.maestria}</h4>
                        <ul className="lista-maestria">
                          <li>
                            <i className="fa fa-book lista-maestrias"></i> {item.requisitos}
                          </li>
                          <li>
                            <i className="fa fa-clock lista-maestrias"></i> {item.duracion}
                          </li>
                          <li>
                            <i className="fa fa-map-marker lista-maestrias"></i> {item.ubicacion}
                          </li>
                        </ul>
                        <a href={item.link} className="mt-auto align-bottom">
                          <button className="btn-maestrias btn-maestriasi">Mas Información</button>
                        </a>
                      </div>
                    </div>
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};