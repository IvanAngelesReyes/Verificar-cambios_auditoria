/*
SmartSoft
Componente: CSalas
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Componente selecciona los distintos componentes de salas

Numero de metodos: 1
Componentes relacionados: CSalas, CDetalleSala,CAsistencia, MBotonSala
*/

import React from "react";
import CSalas from "../Moderadores/CSalas";
import CDetalleSala from "../Moderadores/CDetalleSala"
import CAsistencia from "../Moderadores/CAsistencia"
import MBotonSala from "../../Componentes/Botones/MBotonSala";

export default function ConjuntoSalas(props) {
  
  const [vFrame, setvFrame] = React.useState("salas");

  console.log(" PROPS DE CONJUNTO SALAS --> " + props)

  const mCambiarFrame = () => {
    switch (vFrame) {
      case "salas":
        return <CSalas setvFrame={setvFrame} />;
      case "detallesalas":
        return <CDetalleSala/>;
      case "asistencia":
        return <CAsistencia/>;
      case "botonsala":
          return <MBotonSala/>;
      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}