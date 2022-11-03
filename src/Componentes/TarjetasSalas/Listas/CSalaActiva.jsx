/*
SmartSoft
Componente: CSalaActiva
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Puts from '../../../Util/Puts'

export default function CSalaActiva(props) {
  const { vRegistro,mActualziarSalas,setVKey } = props;

  const handleClick=()=>{
    vRegistro.estatus="Cerrada"
    Puts.mModifcarSalas(vRegistro)
    mActualziarSalas(vRegistro,setVKey)
  }

  return (
    <Mui.Paper elevation={3}>
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%"
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
            
            id="standard-read-only-input"
            label="institucion"
            defaultValue={vRegistro["institucion(es)"]}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            
            id="standard-read-only-input"
            label="Area"
            defaultValue={vRegistro.area}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            
            id="standard-read-only-input"
            label="Sala"
            defaultValue={vRegistro.sala}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.Button  variant="contained" onClick={handleClick}>
            Cerrar
          </Mui.Button>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
