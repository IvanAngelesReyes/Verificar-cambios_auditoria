/*
SmartSoft
Componente: CDetalleSala
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Componente que muestra toda la informacion de la sala

Numero de metodos: 1
Componentes relacionados: CSalas, MBotonExpo
*/

import React from 'react'
import './CDetalleSala.css';
import Button from "@mui/material/Button";
import CAsis from './CAsistencia'
import MBotonExpo from '../../Componentes/Botones/MBotonExpo.jsx'

export default function CDetalleSala(props) {
  
  //const {setvNombre}=props
  console.log("PROPS DE CDETALLESALA --> " + props)

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

      {/* <MBotonExpo/> */}

      <div className='div4' align="right">
          <Button variant="contained" id="btnAsis" size="large"  onClick={CAsis}>Lista de asistencia</Button>

          </div>

    </div>

    
  )

  

}