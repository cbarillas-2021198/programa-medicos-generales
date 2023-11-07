import React from "react";
import { Slide, Zoom } from "react-reveal";

const enviarWhatsApp = (event) => {
  event.preventDefault();

  // Obtiene los valores del formulario
  const nombre = event.target.name.value;
  const mensaje = event.target.message.value;

  // Número de WhatsApp al que se  desea enviar el mensaje 
  // const numeroWhatsApp = "1234567890"; // Cambia esto con tu número de WhatsApp

  // Formatea el mensaje de WhatsApp con los datos del usuario
  const mensajeWhatsApp = `Hola, soy ${nombre}. Mi mensaje es: ${mensaje}`;

  // Construye la URL de WhatsApp
  const urlWhatsApp = `https://wa.me/${37617227}?text=${encodeURIComponent(
    mensajeWhatsApp
  )}`;

  // Redirige al usuario a la URL de WhatsApp
  window.location.href = urlWhatsApp;
};

export const Contacto = () => {
  return (
    <>
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">

            <Zoom>

           
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe
                      width="100%"
                      height="400"
                      frameBorder="0"
                      style={{ border: "0" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.932995411609!2d-90.53272922604539!3d14.602892777022797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a17c7b427d11%3A0x783d44d423ae88cb!2sEscuela%20De%20Auxiliares%20De%20Enfermeria%20Del%20IGSS!5e0!3m2!1ses-419!2sgt!4v1696437816769!5m2!1ses-419!2sgt"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contactanos</h2>
                 

                  <form
                    className="form"
                    method="post"
                    action="mail/mail.php"
                    onSubmit={enviarWhatsApp} 
                  >
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Tu mensaje"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button
                          className="btn btn-contact"
                          type="submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              </Zoom>

              
            </div>
          </div>


           <Slide right>
           <div className="contact-info">
            <div className="row">

              <div className="col-lg-4 col-11  contact-abajo">
                <div className="single-info">
                  <i className="fa fa-phone"></i>
                  <div className="content">
                    <h3>+(502) 1234 5678</h3>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-11 contact-abajo ">
                <div className="single-info">
                  <i className="fa fa-map-marker"></i>
                  <div className="content">
                    <h3>1-00 Zona 13</h3>
                    <p>Escuela de Auxiliares del Igss</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-11 contact-abajo">
                <div className="single-info">
                  <i className="fa fa-clock"></i>
                  <div className="content">
                    <h3>Lunes - Viernes: 8am - 4pm</h3>
                    <p>Sabado, domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            
            </Slide> 
   
          
        </div>
      </section>
    </>
  );
};
