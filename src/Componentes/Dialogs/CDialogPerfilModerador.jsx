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
import * as Variables from "../../Global/Variables";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as Icon from "@mui/icons-material";
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

function mValidarDato(vDatos) {
  let b = false;
  if (vDatos.institucion !== "") {
    if (vDatos.nombre !== "") {
      if (
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          vDatos.correo
        )
      ) {
        if (vDatos.contrasenia !== "") {
          b = true;
        }
      }
    }
  }
  return b;
}

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

export default function CDialogPerfilAuxiliar(props) {
  const {
    vUsuario,
    //setVDatosLogin,
    mRefresaacarPantalla,
  } = props;

  const [vNombre, setvNombre] = React.useState(vUsuario.nombre);
  const [vApePaterno, setvApePaterno] = React.useState(vUsuario.apellido_paterno);
  const [vApeMaterno, setvApeMaterno] = React.useState(vUsuario.apellido_materno);
  const [vSalas, setvSalas] = React.useState(vUsuario.salas);
  const [vCorreo, setvCorreo] = React.useState(vUsuario.correo);
  const [vContrasenia, setvContrasenia] = React.useState(vUsuario.password);
  const [vInstitucion, setvInstitucion] = React.useState(vUsuario.institucion);

  
  const [open, setOpen] = React.useState(true);
  const [vIsModoModificar, setVIsModoModificar] = React.useState(false);
  const [vIsModoModificado, setVIsModoModificado] = React.useState(false);

  
  const [vKey, setVKey] = React.useState(Date.now());

  //variables para el alert
  const [state, setState] = React.useState({
    opeA: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, opeA } = state;

  const handleClickOpen = () => {
    setVKey(Date.now());
    setOpen(true);
  };
  const handleClose = () => {
    setVKey(Date.now());
    setVIsModoModificar(false);
    mCarncelarEdicion();
    setOpen(false);
    if (vIsModoModificado) {
      mRefresaacarPantalla();
      setVIsModoModificado(false);
    }
  };

  const mAccionBotonPrimario = () => {
    if (vIsModoModificar) {
      const vUsuarioTmp = {
        uid: vUsuario.uid,
        institucion: vInstitucion,
        nombre: vNombre,
        apellido_paterno: vApePaterno,
        apellido_materno: vApeMaterno,
        correo: vCorreo,
        salas: vSalas,
        imagen: "null",
        rol: "MODERADOR_ROLE",
        estado: true,
      }; 
      
      if (mValidarDato(vUsuarioTmp)) {
        //console.log(vDatosLoginTmp)
        Puts.mActualizarModerador(vUsuarioTmp);
        vUsuario.nombre=vUsuarioTmp.nombre;
        vUsuario.apellido_paterno=vUsuarioTmp.apellido_paterno;
        vUsuario.apellido_materno=vUsuarioTmp.apellido_materno;
        setVIsModoModificado(true);
        setVIsModoModificar(!vIsModoModificar);
      } else {
        console.log("datos incorrectos, no se registro al moderador");
      }
    } else {
      setVIsModoModificar(!vIsModoModificar);
    }
  };
  const mAccionBotonSecundario = () => {
    if (vIsModoModificar) {
      setVIsModoModificar(!vIsModoModificar);
      mCarncelarEdicion();
    } 
    else {
      let vUsuarioTmp = vUsuario.filter(
        (item) => {
          return item.uid !== vUsuario.uid;
        }
      );
      //Deletes.mEliminarCo(vDatos)
      //setVDatosLogin(UsuarioTmp, true);
      setVIsModoModificado(true);
      setVIsModoModificar(!vIsModoModificar);
      handleClose();
    }
  };

  const mCarncelarEdicion = () => {
    setvNombre(vUsuario.nombre);
    setvCorreo(vUsuario.correo);
    setvContrasenia(vUsuario.contrasenia);
  };

  return (
    <>
      <Mui.Dialog
        key={vKey}
        onClose={handleClose}
        open={open}
        fullWidth={true}
        maxWidth={"sm"}
      >
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
            <Mui.TextField
              disabled={!vIsModoModificar}
              required
              label={Variables.v_TEXTOS.nombre}
              value={vNombre}
              onChange={(evt) => setvNombre(evt.target.value)}
            />
            <Mui.TextField
            disabled={!vIsModoModificar}
              sx={{ width: "100%" }}
              required
              label={Variables.v_TEXTOS.ape_paterno}
              value={vApePaterno}
              onChange={(e) => setvApePaterno(e.target.value)}
            />
            <Mui.TextField
            disabled={!vIsModoModificar}
              sx={{ width: "100%" }}
              required
             label={Variables.v_TEXTOS.ape_materno}
              value={vApeMaterno}
              onChange={(e) => setvApeMaterno(e.target.value)}
            />
            <Mui.TextField
              disabled
              sx={{ width: "100%" }}
              required
              label={Variables.v_TEXTOS.rol}
              value="Moderador"
            />
            <Mui.TextField
            disabled
              sx={{ width: "100%" }}
              required
             label={Variables.v_TEXTOS.institucion}
              value={vInstitucion}
            />
            <Mui.TextField
            disabled={!vIsModoModificar}
              sx={{ width: "100%" }}
              required
             label={Variables.v_TEXTOS.correo}
              value={vCorreo}
              onChange={(e) => setvCorreo(e.target.value)}
            />
            <Mui.TextField
            disabled={!vIsModoModificar}
              sx={{ width: "100%" }}
              required
             label={Variables.v_TEXTOS.contrasenia}
              value={vContrasenia}
              onChange={(e) => setvContrasenia(e.target.value)}
            />
            <Mui.Grid
              container
              sx={{ width: "100%" }}
              spacing={2}
              columns={2}
              justifyContent="center"
              alignItems="center"
            >
              {vIsModoModificar ? (
                <Mui.Button
                  onClick={() => mAccionBotonSecundario()}
                  name={Variables.v_TEXTOS.cancelar}
                >
                  {Variables.v_TEXTOS.cancelar}
                </Mui.Button>
              ) : (
                <></>
              )}

              <Mui.Button
                onClick={() => mAccionBotonPrimario()}
                name={
                  vIsModoModificar
                    ? Variables.v_TEXTOS.guardar
                    : Variables.v_TEXTOS.modificar
                }
                sx={{ marginLeft: 5 }}
                variant="contained"
              >
                {vIsModoModificar
                  ? Variables.v_TEXTOS.guardar
                  : Variables.v_TEXTOS.modificar}
              </Mui.Button>
            </Mui.Grid>
          </Mui.Stack>
        </Mui.DialogContent>
      </Mui.Dialog>
    </>
  );
}
