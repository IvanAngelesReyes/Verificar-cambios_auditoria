import React from "react";

import CSalas from "../Moderadores/CSalas";
import CDetalleSala from "../Moderadores/CDetalleSala"
import CAsistencia from "../Moderadores/CAsistencia"


export default function ConjuntoSalas() {
  const [vFrame, setvFrame] = React.useState("salas");

  const mCambiarFrame = () => {
    switch (vFrame) {
      case "salas":
        return <CSalas setvFrame={setvFrame} />;
      case "detallesalas":
        return <CDetalleSala />;
      case "asistencia":
        return <CAsistencia/>;

      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}