/*
SmartSoft
Componente: CConsultaSala
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente muestra una breve descripcion de la sala al coordinador de moderacion

Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../../Global/Variables";
import CDialogDetallesSala from "../../Dialogs/CDialogDetallesSala";

export default function CConsultaSala(props) {
  const { vSala } = props;

  return (
    <Mui.Paper sx={{ m: "20px", borderRadius: 5 }} elevation={3}>
      <Mui.Box sx={{ padding: 5, width: 300, height: "auto" }}>
        <Mui.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Mui.TextField
            sx={{ width: "100%" }}
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto3}
            defaultValue={vSala.instituciones}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            sx={{ width: "100%" }}
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto1}
            defaultValue={vSala.salon}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            sx={{ width: "100%" }}
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto2}
            defaultValue={vSala.modalidad}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            sx={{ width: "100%" }}
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto6}
            defaultValue={vSala.fecha}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            sx={{ width: "100%" }}
            id="standard-read-only-input"
            label={"Estado"}
            defaultValue={vSala.estatus}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <CDialogDetallesSala vSala={vSala} />
        </Mui.Stack>
      </Mui.Box>
    </Mui.Paper>
  );
}
