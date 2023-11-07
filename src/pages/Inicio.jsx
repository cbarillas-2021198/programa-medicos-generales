
import React from 'react'
import {Banner} from '../components/Banner'
import { Requisitos } from '../components/Requisitos'
import {Sedes} from "../components/Sedes"
import {  SobreNosotros } from '../components/SobreNosotros'
import { Inscripcion } from '../components/Inscripcion'
import { MaestriasInicio } from '../components/MaestriasInicio'

export const Inicio = () => {
  return (
    
    
  <>
      <Banner/>
      <SobreNosotros/>
      <Inscripcion/>
      <Requisitos/>
      <MaestriasInicio/> 
      <Sedes/>
  </> 


  )
}

