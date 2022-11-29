import React from 'react'
import './CSalas.css';
import MBotonSala from '../../Componentes/Botones/MBotonSala.jsx'


export default function CSalas() {
  return (
    <div className="contenedorPrincipalSalas">
      <h2 className="tituloSala">Mis salas</h2>

      <MBotonSala onClick={funPrueba}/>

    </div>
  )
}

const funPrueba = () => {
  console.log("PRUEBA DETALLE SALAS")

}
