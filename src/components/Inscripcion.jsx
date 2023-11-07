import React from 'react'
import { Slide } from 'react-reveal';

export const Inscripcion = () => {
    return (
        <div class="container-fluid  bg-appointment  wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-6 py-5">
                        <Slide right>
                            <div class="py-5">
                                <h1 class="display-5 mb-4 titulo-inscripcion" >Inscripción</h1>
                                <p class="text-white mb-0 texto-inscripcion">Los estudiantes de las especialidades médicas, los Comités de Evaluación y Selección de cada especialidad, aplicarán la normativa de evaluación vigente para tal efecto por la Escuela de Estudios de Postgrado de la Facultad de Ciencias Médicas de la Universidad de San Carlos de Guatemala y en el caso de la Universidad Mariano Gálvez , será su comité docente.</p>
                            </div>
                        </Slide>

                    </div>

                </div>
            </div>
        </div>
    );
}
