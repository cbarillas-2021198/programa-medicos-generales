import { Navigate, Route, Routes } from "react-router-dom";


import { NotFound404 } from "./components/NotFound404";
import { Preguntas } from "./pages/Preguntas";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/contacto";
import {CategoriaMaestrias} from "./pages/CategoriaMaestrias"
import { PrimerasEspecialidades } from "./pages/Primeras Especialidades/PrimerasEspecialidades";
import { SegundasEspecialidades } from "./pages/Segundas Especialidades/SegundasEspecialidades";


/*---------------Importaciones Maestrias-----------------------*/

import {Anestesiologia} from './pages/Maestrias/Anestesiologia'
import {CirugiaGeneral} from "./pages/Maestrias/CirugiaGeneral";
import {CirugiaOral} from "./pages/Maestrias/CirugiaOral";
import {GinecologiaObstetricia} from './pages/Maestrias/GinecologiaObstetricia'
import {InfectologiaAdultos} from './pages/Maestrias/InfectologiaAdultos'
import {InfectologiaPediatrica} from './pages/Maestrias/InfectologiaPediatrica'
import {IntensivoAdulto} from './pages/Maestrias/IntensivoAdulto'
import {IntensivoPediatrico} from './pages/Maestrias/IntensivoPediatrico'
import {MedicinaEmergencia} from './pages/Maestrias/MedicinaEmergencia'
import {MedicinaFisica} from './pages/Maestrias/MedicinaFisica'
import {MedicinaInterna} from './pages/Maestrias/MedicinaInterna'
import {Nefrologia} from './pages/Maestrias/Nefrologia'
import {Neonatologia} from './pages/Maestrias/Neonatologia'
import {Neumologia} from './pages/Maestrias/Neumologia'
import {Neurologia} from './pages/Maestrias/Neurologia'
import {OncologíaMedica} from './pages/Maestrias/OncologíaMedica'
import {Otorrinolaringología} from './pages/Maestrias/Otorrinolaringología'
import {Patologia} from './pages/Maestrias/Patologia'
import {Pediatria} from './pages/Maestrias/Pediatria'
import {Psiquiatria} from './pages/Maestrias/Psiquiatria'
import {Radiologia} from './pages/Maestrias/Radiologia'
import {Reumatología} from './pages/Maestrias/Reumatología'
import {Traumatologia} from './pages/Maestrias/Traumatologia'
import {Urología} from './pages/Maestrias/Urología'
import { Neurocirugia } from "./pages/Maestrias/Neurocirugia";
import { Ginecologia } from "./pages/Maestrias/Ginecologia";
import { Gastroenterologia } from "./pages/Maestrias/Gastroenterologia ";




 
/*---------------Importaciones Maestrias-----------------------*/


export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route   path="/" element={<Inicio/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="categoriasMaestrias" element={<CategoriaMaestrias/>}/>
        <Route path="primerasEspecialidades" element={<PrimerasEspecialidades/>}/>
        <Route path="segundasEspecialidades" element={<SegundasEspecialidades/>}/>
        <Route path="error404" element={<NotFound404 />} />
        <Route path="preguntas" element={ <Preguntas/>} />
        <Route path="/*" element={<Navigate to="/error404" />} />

        {/* -------------------Rutas Maestrias------------------ */}
        <Route path="anestesiologia" element={ <Anestesiologia/> } />
        <Route path="cirugiaGeneral" element={ <CirugiaGeneral/> } />
        <Route path="cirugiaOral" element={ <CirugiaOral/>  } />
        <Route path="ginecologiaObstetricia" element={ <GinecologiaObstetricia/>  } />
        <Route path="infectologiaAdultos" element={ <InfectologiaAdultos/>  } />
        <Route path="infectologiaPediatrica" element={ <InfectologiaPediatrica/>  } />
        <Route path="intensivoAdulto" element={ <IntensivoAdulto/>  } />
        <Route path="intensivoPediatrico" element={ <IntensivoPediatrico/>  } />
        <Route path="medicinaEmergencia" element={ <MedicinaEmergencia/>  } />
        <Route path="medicinaFisica" element={ <MedicinaFisica/>  } />
        <Route path="medicinaInterna" element={ <MedicinaInterna/>  } />
        <Route path="nefrologia" element={ <Nefrologia/>  } />
        <Route path="neonatologia" element={ <Neonatologia/>  } />
        <Route path="oncologíaMedica" element={ <OncologíaMedica/>  } />
        <Route path="otorrinolaringología" element={ <Otorrinolaringología/>  } />
        <Route path="pediatria" element={ <Pediatria/>  } />
        <Route path="radiologia" element={ <Radiologia/>  } />
        <Route path="neurologia" element={ <Neurologia/>  } />
        <Route path="reumatología" element={ <Reumatología/>  } />
        <Route path="urología" element={ <Urología/>  } />
        <Route path="neumologia" element={ <Neumologia/>  } />
        <Route path="patologia" element={ <Patologia/>  } />
        <Route path="psiquiatria" element={ <Psiquiatria/>  } />
        <Route path="traumotologia" element={ <Traumatologia/>  } />
        <Route path="neurocirugia" element={<Neurocirugia/>}   /> 
        <Route path="ginecologia" element={ <Ginecologia/> }   /> 
        <Route path="gastroenterologia" element={<Gastroenterologia/>}/>
       
        

      
    {/* -------------------Rutas  Maestrias------------------ */}

     
      </Routes>

   
    </>
  );
};
