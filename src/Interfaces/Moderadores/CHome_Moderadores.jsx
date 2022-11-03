/*
SmartSoft
Componente: Home de moderadores
Fecha de creacion: 30/10/2022, Autorizó: Ricardo Adrian Alfaro García, Revisó: 
Modificaciones:
    Fecha               Folio

Descripcion:
Este componente es la ventana en donde se le muestran la informacion de cintacto a los usuarios y sus reconocimientos.

Numero de metodos: 
Componentes relacionados: CDialogGrupodeWhatsapp
*/
import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as Variables from "../../Global/Variables";


export default function CHome_Moderadores() {
  return (
    <div>
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        <Grid item xs={16} md={2}>
        <a href="https://chat.whatsapp.com/EHHG6CNr1P49Nw7LX5biHh"
         target="_blank">
          <Button variant="contained">
            <Mui.Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Icon.WhatsApp />
              {Variables.v_TEXTOS.unetea}
            </Mui.Stack>
          </Button>
          </a>
        </Grid>
        <Grid item xs={16} md={2}>
        <a href="https://drive.google.com/file/d/1s-EpXcOnxIS4k66T447L5V66TQCXem_S/view?usp=share_link"
         target="_blank">
          <Button variant="contained">
            <Mui.Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Icon.Article />
              {Variables.v_TEXTOS.manual}
            </Mui.Stack>
          </Button>
          </a>
        </Grid>
        <Grid item xs={16} md={2}>
          <Mui.Typography variant="body1" color='primary' component="h2" align='center'>
            <Mui.Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Icon.Email />
              {Variables.v_TEXTOS.contactar}
            </Mui.Stack>
          </Mui.Typography>
        </Grid>
      </Grid>
    </div>
  );
}
