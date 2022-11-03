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
import DialogPerfilConsulta from "../../Dialogs/CDialogPerfilConsulta";



export default function CConsejero(props) {

  const {
      nombre
  } = props

  return (
    <Mui.Paper elevation={3}>
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <Mui.Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
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
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
