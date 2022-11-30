/*
SmartSoft
Componente: CSalaActiva
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente muestra una breve descripcion de la sala que se encuentra activa al coordinador de moderacion

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
            id="standard-read-only-input"
            label="Institucion"
            defaultValue={vRegistro.instituciones}
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
          <Mui.Button variant="contained" onClick={handleClick}>Cerrar</Mui.Button>
        </Mui.Stack>
      </Mui.Box>
    </Mui.Paper>
  );
}
