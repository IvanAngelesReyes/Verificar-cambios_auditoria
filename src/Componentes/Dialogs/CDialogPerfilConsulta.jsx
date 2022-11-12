/*
SmartSoft
Componente: CPerfil
Fecha de creacion: 20/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion: 
Esta interfaz mostrará a los coordinadores  los dato del perfi de los consejeros y moderadores. Aqui mismo se puede cambiar el rol.

Numero de metodos: 0
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import * as Deletes from "../../Util/Deletes";
import * as Puts from "../../Util/Puts";
import CDialogConfirmarCambiarRol from "./CDialogConfirmarCambiarRol";
import CDialogConfirmarEliminacion from "./CDialogConfirmarEliminacionDatos";


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

export default function CDialogPerfilConsulta(props) {
  const {
    vRegistro,
    setVRegistrosModeradores,
    vRegistrosModeradores,
    mRefresaacarPantalla,
  } = props;

  const [vNombre, setvNombre] = React.useState(vRegistro.nombre);
  const [vApePaterno, setvApePaterno] = React.useState(vRegistro.apellido_paterno);
  const [vApeMaterno, setvApeMaterno] = React.useState(vRegistro.apellido_materno);
  const [vInstitucion, setvInstitucion] = React.useState(vRegistro.institucion);
  const [vCorreo, setvCorreo] = React.useState(vRegistro.correo);
  const[vConsejero, setvConsejero] = React.useState(vRegistro.consejero)

  const [vIsModoCambiar, setVIsModoCambiar] = React.useState(false);
  const [vIsModoCambiado, setVIsModoCambiado] = React.useState(false);

  console.log(props)

  const [vKey, setVKey] = React.useState(Date.now());
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setVKey(Date.now());
    setOpen(true);
  };
  const handleClose = () => {
    setVKey(Date.now());
    setVIsModoCambiar(false);
    //mCarncelarEdicion();
    setOpen(false);
  };

  const mAccionBotonPrimario = () =>{
    const vRegistroTmp = {
      consejero: vConsejero,
    };

    let vRegistrosModeradoresTmp = vRegistrosModeradores.map((item) =>{
      if(item.uid === vRegistroTmp.uid){
        return vRegistroTmp;
      }else{
        return item;
      }
    });
    console.log(vRegistrosModeradoresTmp)
    Puts.mActualizarRolModerador(vRegistroTmp);
    setVRegistrosModeradores(vRegistrosModeradoresTmp, true);
    setVIsModoCambiado(true);
    setVIsModoCambiar(!vIsModoCambiar);
  };

  const mAccionBotonSecundario = () =>{
    let vRegistrosModeradoresTmp = [];
    for (let i = 0; i < vRegistrosModeradores.length; i++) {
      if (vRegistrosModeradores[i].uid !== vRegistro.uid) {
        vRegistrosModeradoresTmp.push(vRegistrosModeradores[i]);
      }
    }
    Deletes.mEliminarModeradorConsejero(vRegistro)
    setVRegistrosModeradores(vRegistrosModeradoresTmp, true);
    setVIsModoCambiado(true);
    setVIsModoCambiar(!vIsModoCambiar);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {Variables.v_TEXTOS.ver_perfil}
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align = "center">
          Perfil
        </BootstrapDialogTitle>
        <DialogContent dividers>
          
            <Mui.Stack direction="column"
              spacing={2}
              alignItems="center"
              justifyContent="center">
                <Mui.Stack direction="row"
                  spacing={4}
                  alignItems="center"
                  justifyContent="center">

                  <Typography gutterBottom>
                    {" " + vNombre + " " + vApePaterno + " " + vApeMaterno + " "}
                  </Typography>
                </Mui.Stack> 

                <Typography gutterBottom>
                  {vInstitucion}
                </Typography>

                <Typography gutterBottom>
                  {vConsejero===true?"Consejero":"Moderador"}
                </Typography>

                <Typography gutterBottom>
                  {vCorreo}
                </Typography>

            </Mui.Stack>
                      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <CDialogConfirmarEliminacion
                  vAccionAceptar={mAccionBotonSecundario}
                />
          </Button>
          <Button onClick={handleClose}>
            {Variables.v_TEXTOS.cambiar}
            <cDialogConfirmarCambiarRol/>
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
