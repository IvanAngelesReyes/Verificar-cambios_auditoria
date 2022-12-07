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
import MBotonExpo from '../../Componentes/Botones/MBotonExpo.jsx'

export default function CDetalleSala(props) {
  
  // function modalidad(props){
  //   let modalidad
  //   modalidad = props.modalidadSala

  //   if(modalidad === "presencial"){
  //     props.urlSala = ""
  //     return props.urlSala
  //   }else{
  //     let url = "URL: " + props.urlSala
  //     return url
  //   }
  // }

  return (
    <div className="contenedorPrincipalSalas">

      <h1 className="tituloSala">{props.nombreSala}</h1>

      <hr id="lineaDiv"/>

      <div className="divContenedorInfoSala"> 
          
          <div className="div1">
            <h2>{"Area: " + props.areaSala}</h2>
            <h2>{"Ubicacion: " + props.ubicacionSala}</h2>
            <h2>{"No. ponentes:" + props.nopontentesSala}</h2>
          </div>

          <div className="div2">
            <h2>{"Modalidad: " + props.modalidadSala}</h2>
            <h2>{"Salon: " + props.salonSala}</h2>
            <h2>{"URL: " + props.urlSala}</h2>
          </div>

          <div className="div3">
            <h2>{"Fecha: " + props.fechaSala}</h2>
            <h2>{"Turno: " + props.turnoSala}</h2>
          </div>

      </div>

      <hr id="lineaDiv2"/>

      <h1 className="exposicionesSala">Exposiciones</h1>

      <MBotonExpo/>

    </div>
  )

}