import React from 'react'
import './CSalas.css';
import * as Gets from '../../Util/Gets';
import MBotonSala from '/var/www/moderadores/src/Componentes/Botones/MBotonSala.jsx'
import MBotonSalaVirtual from '/var/www/moderadores/src/Componentes/Botones/MBotonSalaVirtual.jsx'


export default function CSalas(props) {

  const {setvFrame}=props

  const handleClick = () => {
    Gets.mGetSalas();
  }

  return (
    <div className="contenedorPrincipalSalas">
      <h2 className="tituloSala">Mis salas</h2>

      <button id="btnAbrirSala" onClick={()=>setvFrame("detallesalas")}>Abrir sala</button>
      
      <button id="btnMostrarSalasConsola" onClick={handleClick}>Mostrar salas en consola</button>

      <h3 className="tituloSalasHoy">Salas de hoy</h3>

      <MBotonSalaVirtual />

      <h3 className="tituloSalasAyer">Ayer</h3>

      <MBotonSala/>

      {/*Meter aqui el componente de salas*/}

    </div>
  )

}
