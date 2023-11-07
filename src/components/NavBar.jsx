import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import image1 from "/images/logo-movil.png";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
    <div className="container">


      <div className="navbar-left">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={image1} alt="IGSS" className="logo-img" />
          <h5 className="text-logo texto-navbar">
            Instituto Guatemalteco de  <br /> <span className="verde-institucional"> Seguridad Social</span>
          </h5>
        </Link>
      </div>


      
      <div className={`navbar-divider ${active ? "show" : ""}`}></div>
      <div className="navbar-right">
        <button
          className={`navbar-toggler ${active ? "collapsed" : ""} custom-navbar-toggler`}
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${active ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto md-ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" onClick={toggleNav}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categoriasMaestrias" className="nav-link" activeClassName="active" onClick={toggleNav}>
                Maestrías
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/preguntas" className="nav-link" activeClassName="active" onClick={toggleNav}>
                Preguntas Frecuentes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link" activeClassName="active" onClick={toggleNav}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
};



// <nav className="">
    //   <div className="row d-flex">
    //     <div className="logo col-lg-3 d-flex ">
    //       <img src="/images/logo-movil.png" alt="" className="logo-nav" />
    //       <h2>
    //         Insituto Nacional de <br />
    //         <span style={{ color: "green" }}>Seguridad Social</span>
    //       </h2>
    //     </div>


   

    //     <div className="vinculos col-lg-9 azul-institucional d-flex">
    //       <ul className=" ms-auto md-ms-auto d-flex lista-vinculos">
    //         <li className="nav-item ">
    //           <NavLink
    //             to="/"
    //             className="nav-link text-white"
    //             activeClassName="active"
    //             onClick={toggleNav}
    //           >
    //             Inicio
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/AllMaestrias"
    //             className="nav-link text-white"
    //             activeClassName="active"
    //             onClick={toggleNav}
    //           >
    //             Maestrías
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/preguntas"
    //             className="nav-link text-white"
    //             activeClassName="active"
    //             onClick={toggleNav}
    //           >
    //             Preguntas Frecuentes
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/contacto"
    //             className="nav-link text-white"
    //             activeClassName="active"
    //             onClick={toggleNav}
    //           >
    //             Contacto
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>