/*
SmartSoft
Componente: CDialogPerfilCoordinador
Fecha de creacion: 20/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion: 
Esta interfaz mostrará el perfil del coordinador con sus respectivos datos.

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

const vListaInstituciones = ["UNAM", "UAPT", "UEAMEX"];
function mInstituciones() {
  return vListaInstituciones.map((item, index) => (
    <Mui.MenuItem value={item}>{item}</Mui.MenuItem>
  ));
}

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

export default function CDialogPerfilCoordinador(props) {
  const {
    vRegistro,
    setVRegistrosCoordinadores,
    vRegistrosCoordinadores,
    mRefresaacarPantalla,
  } = props;
  
  const [open, setOpen] = React.useState(false);
  const [vIsModoModificar, setVIsModoModificar] = React.useState(false);
  const [vIsModoModificado, setVIsModoModificado] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ver perfil
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align = "center" >
          Mi Perfil
        </BootstrapDialogTitle>
        <DialogContent dividers>

        <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Institucion"
            value = "UAEMEX"
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Nombre"
            value = "Alejandra"
            type="name"
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Apellido paterno"
            value = "Chaparro"
            type="name"
            fullWidth
            variant="standard"
          />

          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Apellido materno"
            value = "Matias"
            type="name"
            fullWidth
            variant="standard"
          />
          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Email Address"
            value = "ale-gpo13@gmail.com"
            type="email"
            fullWidth
            variant="standard"
          />
          <Mui.TextField
            autoFocus
            disabled
            margin="dense"
            label="Contraseña"
            value = "12345678"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Editar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
