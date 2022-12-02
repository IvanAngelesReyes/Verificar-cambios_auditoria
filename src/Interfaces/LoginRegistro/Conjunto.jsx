import React from "react";

import Login from "./Login";
import Registro from "./Registro";
import RecuperaContra from "./RecuperaContra";
import CModerador from "../Moderadores/CModerador";
//import CCoordinador from "../../Interfaces/Coordinador/CCoordinador"
//import CAdministrador from "../../Interfaces/Administrador/CAdministrador"

export default function Conjunto(props) {
  const [vFrame, setvFrame] = React.useState("login");

  const mCambiarFrame = () => {
    switch (vFrame) {
      case "login":
        return <Login {...props} setvFrame={setvFrame} />;
      case "registro":
        return <Registro />;
      case "recuperarc":
        return <RecuperaContra />;
      case "moderador":
        return <CModerador />;
      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}
