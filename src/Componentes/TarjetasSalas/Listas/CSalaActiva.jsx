/*
SmartSoft
Componente: CSalaActiva
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 1
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Puts from "../../../Util/Puts";
import * as Variables from "../../../Global/Variables";

export default function CSalaActiva(props) {
  const { vRegistro, mActualziarSalas, setVKey, mActivarFiltros } = props;

  const handleClick = () => {
    vRegistro.estado = "Cerrada";
    vRegistro.fecha_cierre = "18 de enero de 2022";
    Puts.mModifcarSalas(vRegistro);
    mActualziarSalas(vRegistro, setVKey);
    mActivarFiltros();
  };

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
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto17}
            defaultValue={vRegistro.no_ponentes}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.Button variant="contained" onClick={handleClick}>
            Cerrar
          </Mui.Button>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
