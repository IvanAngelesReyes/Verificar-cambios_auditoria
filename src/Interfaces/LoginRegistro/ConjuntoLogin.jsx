/*Esta ventana es para ligar la parte del login con lo que abre. Ya sea moderadores o coordinadores*/

import React from "react";

import Login from "./Login";
import CModerador from "../Moderadores/CModerador"

export default function Conjunto() {
  const [vFrame, setvFrame] = React.useState("login"); // 1: Login, 2: Creacr cuenta, 3 Recuperar contraseña
  
  const mCambiarFrame = () => {
    switch (vFrame) {
      case "login":
        return <Login setvFrame={setvFrame} />;
      case "moderador":
        return <CModerador />;
      default:
        break;
    }
  };

  return <>{mCambiarFrame()}</>;
}