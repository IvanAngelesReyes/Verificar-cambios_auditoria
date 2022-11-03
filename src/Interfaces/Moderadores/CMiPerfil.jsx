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

const vListaInstituciones = ["Todo", "UNAM", "UAPT", "UAEMEX"];


export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
  const handleClick = (vRegistro) => {
    Puts.mActualizarModerador(vRegistro);
    setState({ ...state, open: true });
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <Mui.Alert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const { children, onClose, ...other } = props;
  const [vInstitucionSeleccionada, setVInstitucionSeleccionada] =
  React.useState("Todo");
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [vInstitucionSeleccionada, setVInstitucionSeleccionada] =
  React.useState("Todo");
  const [vIsFiltro, setVIsFiltro] = React.useState(true);
  const mfiltroInstituciones = async (vRegistros) => {
    return await vRegistros.filter((item) => {
      return vInstitucionSeleccionada === "Todo"
        ? true
        : item.institucion === vInstitucionSeleccionada;
    });
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

          <Mui.Stack direction="column" spacing={2}>
          <Mui.Avatar  alt="Remy Sharp" src="/api-moderadores/backend/src/assets/1.jpg"/>
          <Typography gutterBottom>
          Franco
          </Typography>

          </Mui.Stack>

          <Typography gutterBottom>
            ivan_elguapo@gmail.com
          </Typography>
          <Mui.TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="name"
            fullWidth
            variant="standard"
          />
           <Mui.TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Apellido paterno"
            type="lastname"
            fullWidth
            variant="standard"
          />
          <Mui.TextField
            autoFocus
            margin="dense"
            id="lastname2"
            label="Apellido materno"
            type="lastname2"
            fullWidth
            variant="standard"
          />
          <Mui.TextField
            autoFocus
            margin="dense"
            id="areainteres"
            label="Area de interes"
            type="areainteres"
            fullWidth
            variant="standard"
          />
          <Mui.TextField
            autoFocus
            margin="dense"
            id="areainteres"
            label="Area de interes 2"
            type="areainteres"
            fullWidth
            variant="standard"
          />
                   <Mui.Autocomplete
              disablePortal
              options={vListaInstituciones}
              fullwidth
              renderInput={(params) => (
                <Mui.TextField {...params} label="Institución" />
              )}
              value={vInstitucionSeleccionada}
              inputValue={vInstitucionSeleccionada}
              onInputChange={(event, newInputValue) => {
                setVIsFiltro(true);
                if (newInputValue.length === 0) {
                  setVInstitucionSeleccionada("Todo");
                } else {
                  setVInstitucionSeleccionada(newInputValue);
                }
              }}
            />
          <Mui.TextField
            autoFocus
            margin="dense"
            id="contrasenia"
            label="Contraseña"
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
