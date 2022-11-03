/*
SmartSoft
Componente: CRedactarCorreo
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente... 

Numero de metodos: 1
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";

import CInputEditorText from "../Inputs/CInputEditorText";

export default function CRedactarCorreo(props) {
  const {
    vTitulo,
    vTituloCuerpoCorreo,
    comentarios,
    vValueCuerpoCorreo,
    mCambiarInfoCuerpoCorreo,
    vValueAsunto,
    mCambiarValueAsunto,
    comentariosGenerales,
  } = props;


  return (
    <Mui.Paper
      elevation={3}
      sx={{
        padding: "10px",
        margin: "10px",
      }}
    >
      <Mui.Typography
        sx={{
          width: "fit-content",
          fontSize: "20px",
          marginTop: "5px",
          marginLeft: "5px",
          marginBottom: "10px",
        }}
        variant="h5"
        component="h2"
      >
        {vTitulo}
      </Mui.Typography>

      <Mui.TextField
        sx={{ width: "100%" }}
        label="Asunto del correo"
        variant="outlined"
        value={vValueAsunto}
        onChange={(evt) => mCambiarValueAsunto(evt.target.value)}
      />
      <CInputEditorText
        titulo={vTituloCuerpoCorreo}
        comentarios={comentarios}
        value={vValueCuerpoCorreo}
        cambiarInfoFormulario={mCambiarInfoCuerpoCorreo}
      />
      <p className="comentarioCorreoGeneral">{comentariosGenerales}</p>
    </Mui.Paper>
  );
}
