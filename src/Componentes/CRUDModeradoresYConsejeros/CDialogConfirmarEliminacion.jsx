/*
SmartSoft
Componente: CDialogDellatesCoordinador
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente se muestra al eliminar a un coordinador para que la accion sea confirmada.

Numero de metodos: 
Componentes relacionados: Ninguno
*/

import React from "react";
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import * as Variables from "../../Global/Variables";

/**
 * Método principal CDialogDetallesCoordinador
 * @param {*} props 
 * @returns 
 */
export default function CDialogDellatesCoordinador(props) {
  const { vAccionAceptar, vAccionCancelar } = props;

  //variables para el alert
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const mAccionBotonPrimario = () => {
    vAccionAceptar();
    handleClose();
  };
  const mAccionBotonSecundario = () => {
    vAccionCancelar();
    handleClose();
  };

  return (
    <>
      <Mui.Button onClick={handleClickOpen}>
        {Variables.v_TEXTOS.eliminar}
      </Mui.Button>

      <Mui.Dialog onClose={handleClose} open={open} fullWidth={true}>
        <Mui.DialogContent>
          <Mui.DialogTitle>
            <Mui.Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              {Variables.v_TEXTOS.ver_perfil}
              <Mui.IconButton onClick={() => handleClose()} aria-label="delete">
                <Icon.Close />
              </Mui.IconButton>
            </Mui.Stack>
          </Mui.DialogTitle>
          <Mui.Stack
            direction="column"
            divider={<Mui.Divider orientation="horizontal" flexItem />}
            spacing={1}
          >
            <Mui.Typography variant="body1" component="p">
              {Variables.v_TEXTOS.confirmar_eliminacion}
            </Mui.Typography>
            <Mui.Grid
              container
              sx={{ width: "100%" }}
              spacing={2}
              columns={2}
              justifyContent="center"
              alignItems="center"
            >
              <Mui.Button onClick={() => mAccionBotonSecundario()}>
                {Variables.v_TEXTOS.cancelar}
              </Mui.Button>
              <Mui.Button
                onClick={() => mAccionBotonPrimario()}
                sx={{ marginLeft: 5 }}
                variant="contained"
              >
                {Variables.v_TEXTOS.eliminar}
              </Mui.Button>
            </Mui.Grid>
          </Mui.Stack>
        </Mui.DialogContent>
      </Mui.Dialog>
    </>
  );
}
