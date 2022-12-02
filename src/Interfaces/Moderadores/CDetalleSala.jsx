import React from 'react'
import './CDetalleSala.css';
import MBotonExpo from '../../Componentes/Botones/MBotonExpo.jsx'

export default function CDetalleSala(props) {
  //const {setvFrame}=props
  //console.log("PROPS DE CDETALLESALA --> "+props)

  return (
    <div className="contenedorPrincipalSalas">

      <h1 className="tituloSala">{props.nombreSala}</h1>

      <div className="divContenedorInfoSala">
          
          <div className="div1">
            <h2>{props.areaSala}</h2> 
            <h2>{props.nopontentesSala}</h2>
          </div>

          <div className="div2">
            <h2>{props.modalidadSala}</h2>
            <h2>Total de exposiciones: </h2>
          </div>

          <div className="div3">
            <h2>{props.fechaSala}</h2>
            <h2>Total de exposiciones moderadas: </h2>
          </div>

      </div>

      <MBotonExpo/>

    </div>
  )

}