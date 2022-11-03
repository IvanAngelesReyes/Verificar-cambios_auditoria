/*
SmartSoft
Componente: CConsejero
Fecha de creacion: 26/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../../Global/Variables";
import { styled } from "@mui/material/styles";
import DialogPerfilConsulta from "../../Dialogs/CDialogPerfilConsulta";




export default function CConsejero(props) {

  const {
      nombre
  } = props

  return (
    <Mui.Paper sx={{m:1}} elevation={3} 
    >
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
            height: 350,
          },
        }}
      >
          <Mui.Stack
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            
            <Mui.Avatar  alt="Remy Sharp" src="/api-moderadores/backend/src/assets/1.jpg"/> 

            <Mui.TextField
              label={Variables.v_TEXTOS.nombre}
              defaultValue={nombre}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <Mui.TextField
              label={Variables.v_TEXTOS.institucion}
              defaultValue="UAEM"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <Mui.TextField
              label={Variables.v_TEXTOS.rol}
              defaultValue="Consejero"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <DialogPerfilConsulta/>
          </Mui.Stack>
      </Mui.Box>
    </Mui.Paper>
  );
}
