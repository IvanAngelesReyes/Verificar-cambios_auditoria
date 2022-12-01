/*
SmartSoft
Componente: CDialogPerfilAdministrador
Fecha de creacion: 20/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion: 
Esta interfaz mostrará el perfil del administrador con sus respectivos datos.

Numero de metodos: 0
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
//import * as Variables from "../../Global/Variables";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import * as Puts from "../../Util/Puts";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CDialogPerfilAdministrador(props) {
  const {
    vUsuario,
    mRefresaacarPantalla,
  } = props;
  
  const [vNombre, setvNombre] = React.useState(vUsuario.nombre);
  const [vApePaterno, setvApePaterno] = React.useState(vUsuario.apellido_paterno);
  const [vApeMaterno, setvApeMaterno] = React.useState(vUsuario.apellido_materno);
  const [vCorreo, setvCorreo] = React.useState(vUsuario.correo);
  const [vContrasenia, setvContrasenia] = React.useState(vUsuario.password);
  
  const [open, setOpen] = React.useState(true);

  //variables para el alert
  const [state, setState] = React.useState({
    opeA: false,
    vertical: "top",
    horizontal: "center",
  });
  
  const { vertical, horizontal, opeA } = state;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align = "center" >
        {Variables.v_TEXTOS.ver_perfil}
        </BootstrapDialogTitle>
        <DialogContent dividers>

        <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label={Variables.v_TEXTOS.nombre}
            value={vNombre}
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label={Variables.v_TEXTOS.ape_paterno}
            value={vApePaterno}
            type="name"
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label={Variables.v_TEXTOS.ape_materno}
            value={vApeMaterno}
            type="name"
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label={Variables.v_TEXTOS.correo}
              value={vCorreo}
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}