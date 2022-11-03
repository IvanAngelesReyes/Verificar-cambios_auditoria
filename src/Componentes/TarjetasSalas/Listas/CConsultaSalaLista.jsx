/*
SmartSoft
Componente: CConsultaSala
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

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

export default function CConsultaSalaLista(props) {
  const { vSala } = props;

  return (
    <Mui.Paper
      sx={{ m: 1, padding: 2, width: "100%", height: "auto" }}
      elevation={3}
    >
      <Mui.Box sx={{ width: "100%" }}>
        <Mui.Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          columns={5}
        >
          <Mui.Grid item xs>
            <Mui.TextField
              id="standard-read-only-input"
              label={Variables.v_TEXTOS.detalles_sala.texto3}
              defaultValue={vSala["institucion(es)"]}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Mui.Grid>
          <Mui.Grid item xs>
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto1}
            defaultValue={vSala["salon"]}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            />
            </Mui.Grid>
            <Mui.Grid item xs>
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto2}
            defaultValue={vSala.modalidad}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            />
            </Mui.Grid>
            <Mui.Grid item xs>
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto6}
            defaultValue={vSala.fecha}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            />
            </Mui.Grid>
            <Mui.Grid item xs>
          <Mui.TextField
            id="standard-read-only-input"
            label={"Estado"}
            defaultValue={vSala.estatus}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
            </Mui.Grid>
          <CDialogDetallesSala vSala={vSala} />
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
