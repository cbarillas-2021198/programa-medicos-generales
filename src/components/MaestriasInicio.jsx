import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';

export const MaestriasInicio = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && !countersStarted) {
          
          setCountersStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countersStarted]);

  return (
    
    <div  className="  Courses bg-maestrias " >

      <Fade duration="2500 ">

      
      <div className=" contenido-maestrias ">
        <div className="row">
          <h1 className=" text-white text-center mb-4 ">Maestrías</h1>
          <div className="col-lg-6 col-md-6 caja-numeros">
            <div className="row">
              <div className="col-sm-6 ">
                <div className="d-flex flex-column align-items-center border" ref={sectionRef}>
                  <h2 className="display-3 texto-primary mb-3 numeros-especialidades" data-toggle="counter-up">
                    {countersStarted ? <CountUp end={16} duration={3} delay={0.5} /> : 0}
                  </h2>
                  <h5 className="font-weight-bold mb-4 texto-moviles text-white ">Primeras Especialidades</h5>
                </div>
              </div>
              <div className="col-sm-6 pb-1 numeros-especialidades">
                <div className="d-flex flex-column align-items-center border px-4 mb-4" ref={sectionRef}>
                  <h2 className="display-3 texto-primary mb-3 numeros-especialidades" data-toggle="counter-up">
                    {countersStarted ? <CountUp end={14} duration={3} delay={0.5} /> : 0}
                  </h2>
                  <h5 className="font-weight-bold mb-4 texto-moviles text-white ">Segundas Especialidades</h5>
                </div>
              </div>
            </div>
          </div>
          <Fade duration="2500">


          <div className="col-lg-6 col-md-6">
            <div className="box_text">
              <div className="titlepage "></div>
              <p className='text-white text-maestrias'>
                Nuestra institución se enorgullece de ofrecer una amplia gama de oportunidades de especialización para aquellos que buscan avanzar en sus conocimientos y habilidades. Contamos con un total de 30 especialidades cuidadosamente diseñadas, que se dividen en 16 primeras especialidades y 14 segundas especialidades.
              </p>
              <NavLink to="categoriasMaestrias">
                <h6 className=''>Ver Maestrías</h6>
              </NavLink>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      </Fade>
    </div>
  );
};