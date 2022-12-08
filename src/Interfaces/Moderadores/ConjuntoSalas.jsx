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
import * as Gets from "../../Util/Gets";

export default function ConjuntoSalas(props) {

  const {vUsuario} = props;

  console.log("vUsuario desde ConjuntoSalas --> " + vUsuario)
  
  const [vFrame, setvFrame] = React.useState("salas");

  const [vNombre, setvNombre] = React.useState("");
  const [vArea, setvArea] = React.useState("");
  const [vModalidad, setvModalidad] = React.useState("");
  const [vFecha, setvFecha] = React.useState("");
  const [vUbicacion, setvUbicacion] = React.useState("");
  const [vSalon, setvSalon] = React.useState("");
  const [vTurno, setvTurno] = React.useState("");
  const [vNoponentes, setvNoponentes] = React.useState("");
  const [vUrl, setvUrl] = React.useState("");

  const mCambiarFrame = () => {
    switch (vFrame) {
      case "salas":
        return <CSalas 
                  setvFrame={setvFrame}
                  setvNombre={setvNombre}
                  setvArea={setvArea}
                  setvModalidad={setvModalidad}
                  setvFecha={setvFecha}
                  setvUbicacion={setvUbicacion}
                  setvSalon={setvSalon}
                  setvTurno={setvTurno}
                  setvNoponentes={setvNoponentes}
                  setvUrl={setvUrl}/>;
      case "detallesalas":
        return <CDetalleSala 
                  nombreSala={vNombre}
                  areaSala={vArea}
                  modalidadSala={vModalidad}
                  fechaSala={vFecha}
                  ubicacionSala={vUbicacion}
                  salonSala={vSalon}
                  turnoSala={vTurno}
                  nopontentesSala={vNoponentes}
                  urlSala={vUrl}
                  />;
      case "asistencia":
        return <CAsistencia/>;
      // case "botonsala":
      //      return <MBotonSala setvNombre={setvNombre}/>;
      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}