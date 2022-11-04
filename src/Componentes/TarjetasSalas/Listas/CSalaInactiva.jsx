/*
SmartSoft
Componente: CSalaInactiva
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente muestra una breve descripcion de la sala que se encuentra inactiva al coordinador de moderacion

Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from '../../../Global/Variables'
import CDialogRegistroEspontaneo from '../../Dialogs/CDialogRegistroEspontaneo'
import * as Puts from '../../../Util/Puts'

export default function CSalaInactiva(props) {
  const { vRegistro,mActualziarSalas,setVKey } = props;

  const handleClick=()=>{
    vRegistro.estatus="Activa"
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
          <Mui.Button
            disabled={vRegistro?.moderador !== undefined ? false : true}
            variant="contained"
            onClick={handleClick}
          >
            {Variables.v_TEXTOS.abrir_sala}
          </Mui.Button>
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
            defaultValue={vRegistro.salon}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <CDialogRegistroEspontaneo
            setVKey={setVKey}
            vSala={vRegistro}
            mActualziarSalas={mActualziarSalas}
          />
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
