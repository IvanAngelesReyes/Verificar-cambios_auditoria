import React from "react";
import * as Mui from "@mui/material";

import { v_TEXTOS } from "../../../Global/Variables";
import CDialogConfirmarEliminacionDatos from "../../Dialogs/CDialogConfirmarEliminacionDatos";

export default function DatosAlmacenados() {
  return (
    <>
      <Mui.Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
          <Mui.Button sx={{m:1}} variant="contained">
            {v_TEXTOS.configuraciones.conf3.btn1}
          </Mui.Button>
          <CDialogConfirmarEliminacionDatos/>
      </Mui.Grid>
    </>
  );
}
