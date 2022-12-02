import React from "react";
import * as Mui from "@mui/material";

import { v_TEXTOS } from "../../../Global/Variables";
import * as Deletes from "../../../Util/Deletes";
import CDialogConfirmarEliminacionDatos from "../../Dialogs/CDialogConfirmarEliminacionDatos";

export default function DatosAlmacenados() {

   //variables para el alert
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <Mui.Alert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  const mAccionEliminar = () => {
    setState({ ...state, open: true });
    Deletes.mEliminarTodo()
  }

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
        <CDialogConfirmarEliminacionDatos vAccionAceptar={ ()=>mAccionEliminar()} />
      </Mui.Grid>
      <Mui.Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            {v_TEXTOS.alertas.datosAlmacenados.eliminado}
          </Alert>
        </Mui.Snackbar>
    </>
  );
}
