import React from 'react'
import './CDetalleSala.css';
import MBotonExpo from '../../Componentes/Botones/MBotonExpo.jsx'
import MBotonAsistencias from '/var/www/moderadores/src/Componentes/Botones/CBotonCuadroLista.jsx'


export default function CDetalleSala(props) {
  const {setvFrame}=props

  return (
    <div className="contenedorPrincipalSalas">

      <h1 className="tituloSala">Sala 1</h1>

      <div className="divContenedorInfoSala">
          
          <div className="div1">
            <h2>Area III. Medicina y salud</h2> 
            <h2>Total de expositores: </h2>
          </div>

          <div className="div2">
            <h2>Modalidad virtual. Plataforma ZOOM</h2>
            <h2>Total de exposiciones: </h2>
          </div>

          <div className="div2">
            <h2>Miercoles 02/11/2022 </h2>
            <h2>Total de exposiciones moderadas: </h2>
          </div>

      </div>

      <MBotonExpo/>
     
      {/*Meter aqui el componente de salas*/}
      

    </div>
  )

}