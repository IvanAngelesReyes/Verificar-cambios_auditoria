import React from "react";

import Login from "./Login";
import Registro from "./Registro";
import RecuperaContra from "./RecuperaContra";
import CModerador from "../Moderadores/CModerador"

export default function Conjunto() {

  const [vFrame, setvFrame] = React.useState("login");
  
  const mCambiarFrame = () => {
    switch (vFrame) {
      case "login":
        return <Login setvFrame={setvFrame} />;
      case "registro":
        return <Registro />;
      case "recuperarc":
        return <RecuperaContra />;
      case "moderador":
        return <CModerador/>; 
      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}