import React from 'react'

import * as Mui from "@mui/material";

import * as Variables from "../../Global/Variables";

export default function Xd(props) {

    const {mSetvFramePrincipal}=props
    
  return (
    <div>
      <Mui.Button
        onClick={() => mSetvFramePrincipal(Variables.v_FRFAMES.moderadores)}
      >
        Moderadores
      </Mui.Button>
      <Mui.Button
        onClick={() => mSetvFramePrincipal(Variables.v_FRFAMES.coordinadores)}
      >
        Coordinadores
      </Mui.Button>
      <Mui.Button
        onClick={() => mSetvFramePrincipal(Variables.v_FRFAMES.administrador)}
      >
        Administrador
      </Mui.Button>
      <Mui.Button
        onClick={() => mSetvFramePrincipal(Variables.v_FRFAMES.login)}
      >
        Login
      </Mui.Button>
    </div>
  );
}
