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
import CAdministrador from "./Interfaces/Administrador/CAdministrador";
import * as Variables from "./Global/Variables";
import Conjunto from "./Interfaces/LoginRegistro/Conjunto";
import CConsejero from "./Interfaces/Consejero/CConsejero";
import CModConsejero from "./Interfaces/Moderadores/CModConsejero";

export default class CModeradores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vFramePrincipal: Variables.v_FRFAMES.login,
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

  mSetvFramePrincipal = (vFramePrincipal, vUsuario) => {
    this.setState({ vFramePrincipal, vUsuario });
  };


  vCambiarFramePrincipal = () => {
    switch (this.state.vFramePrincipal) {
      case Variables.v_FRFAMES.login:
        return (
          <Conjunto
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
      case Variables.v_FRFAMES.consejeros:
        return (
          <CConsejero
            vUsuario={this.state.vUsuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      case Variables.v_FRFAMES.modconsejeros:
        return (
          <CModConsejero
            vUsuario={this.state.vUsuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
          />
        );
      case Variables.v_FRFAMES.auxiliares:
        return (
          <CCoordinador
            vUsuario={this.state.vUsuario}
            vAltoNav={this.state.vAltoNav}
            vAnchoNav={this.state.vAnchoNav}
            mSetvFramePrincipal={this.mSetvFramePrincipal}
            mDatosUsusuario={this.mDatosUsusuario}
          />
        );
      case Variables.v_FRFAMES.administrador:
        return (
          <CAdministrador
            vUsuario={this.state.vUsuario}
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
