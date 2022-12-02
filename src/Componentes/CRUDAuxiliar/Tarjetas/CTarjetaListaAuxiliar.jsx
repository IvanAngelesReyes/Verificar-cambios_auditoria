/*
SmartSoft
Componente: CTarjetaListaAuxiliar
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 1
Componentes relacionados: CDialogDellatesAuxiliar
*/

import React from "react";
import * as Variables from "../../../Global/Variables";
import * as Mui from "@mui/material";
import CDialogDetallesAuxiliar from "../CDialogDellatesAuxiliar";

export default function CTarjetaListaAuxiliar(props) {
  const {
    vRegistro,
  } = props;
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
          <Mui.TextField
            label={Variables.v_TEXTOS.institucion}
            defaultValue={vRegistro.institucion}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            label={Variables.v_TEXTOS.nombre}
            defaultValue={vRegistro.nombre}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            label={Variables.v_TEXTOS.correo}
            defaultValue={vRegistro.correo}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <CDialogDetallesAuxiliar
            {...props}
          />
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
