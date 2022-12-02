/*
SmartSoft
Componente: Conjunto
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Menú donde se seleccionan las distintas opciones del login

Numero de metodos: 1
Componentes relacionados: Login,Registro,RecuperaContra,CModerador
*/

import React from "react";

import Login from "./Login";
import Registro from "./Registro";
import RecuperaContra from "./RecuperaContra";
import CModerador from "../Moderadores/CModerador";

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
