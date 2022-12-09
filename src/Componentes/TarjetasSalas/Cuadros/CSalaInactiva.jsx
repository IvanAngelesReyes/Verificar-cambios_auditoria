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
import * as Variables from "../../../Global/Variables";
import CDialogRegistroEspontaneo from "../../Dialogs/CDialogRegistroEspontaneo";
import * as Puts from "../../../Util/Puts";

export default function CSalaInactiva(props) {
  const { vRegistro, mActualziarSalas, setVKey, mActivarFiltros } = props;

  const handleClick = () => {
    vRegistro.estado = "Activa";
    Puts.mModifcarSalas(vRegistro);
    mActualziarSalas(vRegistro, setVKey);
    mActivarFiltros();
  };

  return (
    <Mui.Paper sx={{ m: 1 }} elevation={3}>
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
            height: 330,
          },
        }}
      >
        <Mui.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Mui.Button
            disabled={
              vRegistro?.moderador !== undefined
                ? false
                : vRegistro?.moderador?.length === 0
                ? false
                : true
            }
            variant="contained"
            onClick={handleClick}
          >
            {Variables.v_TEXTOS.abrir_sala}
          </Mui.Button>
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto6}
            defaultValue={vRegistro.fecha}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto5}
            defaultValue={vRegistro.area}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto2}
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
        </Mui.Stack>
      </Mui.Box>
    </Mui.Paper>
  );
}
