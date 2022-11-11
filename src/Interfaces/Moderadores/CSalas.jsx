import React from 'react'
import './CSalas.css';
import MBotonSala from '../../Componentes/Botones/MBotonSala.jsx'


export default function CSalas() {

  const handleClick = () => {
    console.log("Obteniendo detalles de la sala")
  }

  return (
    <div className="contenedorPrincipalSalas">
      <h2 className="tituloSala">Mis salas</h2>

      <MBotonSala onClick={()=>(handleClick)}/>

    </div>
  )

}
