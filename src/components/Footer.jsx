import React from "react";
import imageFooter from '/images/footerlogo.png'

import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <footer>
    <div className="footer-copyright" style={{ backgroundColor: "#174058" }}>
      <div className="container">
        <div className="row  pt-3">
          <div className="col-md-5 col-sm-12 text-center">
            <img src={imageFooter} />
            <span>© Instituto Guatemalteco de Seguridad Social</span>
            <p style={{ marginTop: "-16px !important" }}>
              <small>
                <a
                  href="/politica-de-privacidad/"
                  style={{ lineHeight: "0.5", color: "white" }}
                >
                  Política de Privacidad
                </a>
              </small>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 text-center">
            <p className="text-white">
              7a. Avenida 22-72 zona 01,
              <br /> Ciudad de Guatemala, Guatemala.
            </p>
          </div>
          <div className="col-md-3 col-sm-12 text-center">
            <p className="text-white">
              IGSS Centro de Contacto 1522 <br /> o al 2412-1224 y 2297-1224
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

// <footer>
//     //   <div class="container">
//     //     <div class="row">
//     //       <div class="col-lg-12">
//     //         <div class="sub-footer">
//     //           <div class="row">
//     //             <div class="col-lg-3">
//     //               <div class="logo">
//     //                 <img className="logo-image" src="./public/logo-igss.png" />
//     //               </div>
//     //             </div>
//     //             <div class="col-lg-6">
//     //               <div class="menu">
//     //                 <ul>
//     //                   <li>
//     //                     <a href="rent-venue.html">Rent Venue</a>
//     //                   </li>
//     //                   <li>
//     //                     <a href="shows-events.html">Shows & Events</a>
//     //                   </li>
//     //                   <li>
//     //                     <a href="tickets.html">Tickets</a>
//     //                   </li>
//     //                 </ul>
//     //               </div>
//     //             </div>
//     //             <div class="col-lg-3">
//     //               <div class="social-links">
//     //                 <ul>
//     //                   <li>
//     //                     <a href="#">
//     //                       <i class="fa fa-twitter"></i>
//     //                     </a>
//     //                   </li>
//     //                   <li>
//     //                     <a href="#">
//     //                       <i class="fa fa-facebook"></i>
//     //                     </a>
//     //                   </li>
//     //                 </ul>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>
