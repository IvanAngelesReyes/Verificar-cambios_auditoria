/*
SmartSoft
Componente: CTarjetaListaCoordinador
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
import CDialogDetallesModerador from "../CDialogDellatesModerador";

export default function CTarjetaListaModerador(props) {
  const {vRegistro, setVRegistrosCoordinadores,vRegistrosCoordinadores,mRefresaacarPantalla} = props;
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
          <CDialogDetallesModerador mRefresaacarPantalla={mRefresaacarPantalla} setVRegistrosCoordinadores={setVRegistrosCoordinadores} vRegistrosCoordinadores={vRegistrosCoordinadores} vRegistro={vRegistro} />
        </Mui.Grid>
        
      </Mui.Box>
    </Mui.Paper>
  );
}
