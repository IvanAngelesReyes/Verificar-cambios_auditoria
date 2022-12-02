import React from "react";

import CSalas from "../Moderadores/CSalas";
import CDetalleSala from "../Moderadores/CDetalleSala"
import CAsistencia from "../Moderadores/CAsistencia"
import MBotonSala from "../../Componentes/Botones/MBotonSala";

export default function ConjuntoSalas(props) {
  
  //console.log(props)

  const [vFrame, setvFrame] = React.useState("salas");

  const mCambiarFrame = () => {
    switch (vFrame) {
      case "salas":
        return <CSalas setvFrame={setvFrame} />;
      case "detallesalas":
        return <CDetalleSala
            nombreSala={props.nombreSala}
            areaSala={props.areaSala}
            modalidadSala={props.modalidadSala}
            fechaSala={props.fechaSala}
            nopontentesSala={props.nopontentesSala}/>;
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