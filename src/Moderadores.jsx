/*
SmartSoft
Componente: Moderadores
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente es el index de todo el programa, aqui es donde todas las intefaces y componentes se juntaran.

Numero de metodos: 1
Componentes relacionados: Todos
*/

import React, { Component } from "react";

import "./App.css";

import CModerador from "./Interfaces/Moderadores/CModerador";
import Xd from "./Interfaces/LoginRegistro/xd";
import CCoordinador from "./Interfaces/Coordinador/CCoordinador";
import * as Variables from "./Global/Variables";
import Conjunto from "./Interfaces/LoginRegistro/Conjunto";
import Registro from "./Interfaces/LoginRegistro/Registro";

export default class CModeradores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vFramePrincipal: "Variables.v_FRFAMES.login",
      vAltoNav: window.innerHeight,
      vAnchoNav: window.innerWidth,
      vUsuario: {},
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ vAltoNav: window.innerHeight - 50 });
    this.setState({ vAnchoNav: window.innerWidth - 50 });
  }

  mSetvFramePrincipal = (vFramePrincipal) => {
    this.setState({ vFramePrincipal });
  };

  mDatosUsusuario(vUsuario) {
    this.setState({ vUsuario: vUsuario });
  }

  vCambiarFramePrincipal = () => {
    switch (this.state.vFramePrincipal) {
      case Variables.v_FRFAMES.login:
        console.log("Login");
        return (
          <Conjunto
            mDatDatos={this.mDatosUsusuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      case Variables.v_FRFAMES.moderadores:
        return (
          <CModerador
            vUsuario={this.state.vUsuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      case Variables.v_FRFAMES.coordinadores:
        return (
          <CCoordinador
            vUsuario={this.state.vUsuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      case Variables.v_FRFAMES.registro:
        return (
          <Registro
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      default:
        return (
          <Xd
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
    }
  };

  render() {
    return <div className="App-header">{this.vCambiarFramePrincipal()}</div>;
  }
}
