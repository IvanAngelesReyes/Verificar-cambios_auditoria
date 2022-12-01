/*
SmartSoft
Componente: CTarjetaCuadroCoordinador
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 
Componentes relacionados: 
*/

import React from "react";
import * as Variables from "../../../Global/Variables";
import * as Mui from "@mui/material";
import CDialogDetallesConsejero from "../CDialogDellatesConsejero";

export default function CTarjetaCuadroConsejero(props) {
  const {vRegistro, setVRegistrosCoordinadores,vRegistrosCoordinadores, mRefresaacarPantalla} = props;

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
            height: 256,
          },
        }}
      >
        <Mui.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
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
          <CDialogDetallesConsejero mRefresaacarPantalla={mRefresaacarPantalla} setVRegistrosCoordinadores={setVRegistrosCoordinadores} vRegistrosCoordinadores={vRegistrosCoordinadores} vRegistro={vRegistro} />
        </Mui.Stack>
        
      </Mui.Box>
    </Mui.Paper>
  );
}
