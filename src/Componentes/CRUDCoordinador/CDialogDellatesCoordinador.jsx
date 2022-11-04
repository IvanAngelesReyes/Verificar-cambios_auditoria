/*
SmartSoft
Componente: CDialogDellatesCoordinador
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 
Componentes relacionados: 
*/

import React from "react";
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import * as Variables from "../../Global/Variables";
import * as Deletes from "../../Util/Deletes";
import * as Puts from "../../Util/Puts";
import CDialogConfirmarEliminacion from "./CDialogConfirmarEliminacion";

const vListaInstituciones = ["UNAM", "UAPT", "UEAMEX"];
function mInstituciones() {
  return vListaInstituciones.map((item, index) => (
    <Mui.MenuItem value={item}>{item}</Mui.MenuItem>
  ));
}

function mValidarRegistro(vRegistro) {
  let b = false;
  if (vRegistro.institucion !== "") {
    if (vRegistro.nombre !== "") {
      if (
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          vRegistro.correo
        )
      ) {
        if (vRegistro.contrasenia !== "") {
          b = true;
        }
      }
    }
  }
  return b;
}

export default function CDialogDellatesCoordinador(props) {
  const {
    vRegistro,
    setVRegistrosCoordinadores,
    vRegistrosCoordinadores,
    mRefresaacarPantalla,
  } = props;


  const [vNombre, setvNombre] = React.useState(vRegistro.nombre);
  const [vApePaterno, setvApePaterno] = React.useState(vRegistro.apellido_paterno);
  const [vApeMaterno, setvApeMaterno] = React.useState(vRegistro.apellido_materno);
  const [vInstitucionProcedencia, setvInstitucionProcedencia] =
    React.useState(vRegistro.institucionProcedencia);
  const [vCorreo, setvCorreo] = React.useState(vRegistro.correo);
  const [vContrasenia, setvContrasenia] = React.useState(vRegistro.password);
  const [vInstitucion, setvInstitucion] = React.useState(vRegistro.institucion);
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setVKey(Date.now());
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setVKey(Date.now());
    setVIsModoModificar(false);
    mCarncelarEdicion();
    setOpen(false);
    if (vIsModoModificado) {
      mRefresaacarPantalla();
      setVIsModoModificado(false);
    }
  };

  const handleChange = (event) => {
    setvInstitucion(event.target.value);
  };

  const mAccionBotonPrimario = () => {
    if (vIsModoModificar) {
      const vRegistroTmp = {
        uid: vRegistro.uid,
        institucion: vInstitucion,
        nombre: vNombre,
        apellido_paterno: vApePaterno,
        apellido_materno: vApeMaterno,
        correo: vCorreo,
        salas: [],
        contrasenia: vContrasenia,
        imagen: [],
        rol: "COORDINADOR_ROLE",
        estado: true,
      };
      
      if (mValidarRegistro(vRegistroTmp)) {
        let vRegistrosCoordinadoresTmp = vRegistrosCoordinadores.map((item) => {
          if (item.uid === vRegistroTmp.uid) {
            return vRegistroTmp;
          } else {
            return item;
          }
        });
        console.log(vRegistrosCoordinadoresTmp)
        Puts.mModificarCoordinador(vRegistroTmp);
        setVRegistrosCoordinadores(vRegistrosCoordinadoresTmp, true);
        setVIsModoModificado(true);
        setVIsModoModificar(!vIsModoModificar);
      } else {
        console.log("datos incorrectos, no se registro al coordinador");
      }
    } else {
      setVIsModoModificar(!vIsModoModificar);
    }
  };
  const mAccionBotonSecundario = () => {
    if (vIsModoModificar) {
      setVIsModoModificar(!vIsModoModificar);
      mCarncelarEdicion();
    } else {
      let vRegistrosCoordinadoresTmp = vRegistrosCoordinadores.filter(
        (item) => {
          return item.uid !== vRegistro.uid;
        }
      );
      Deletes.mEliminarCoordinador(vRegistro)
      setVRegistrosCoordinadores(vRegistrosCoordinadoresTmp, true);
      setVIsModoModificado(true);
      setVIsModoModificar(!vIsModoModificar);
      handleClose();
    }
  };

  const mCarncelarEdicion = () => {
    setvNombre(vRegistro.nombre);
    setvCorreo(vRegistro.correo);
    setvContrasenia(vRegistro.contrasenia);
    setvInstitucion(vRegistro.institucion);
  };

  return (
    <>
      <Mui.Button variant="outlined" onClick={handleClickOpen}>
        {Variables.v_TEXTOS.ver_perfil}
      </Mui.Button>

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
            <Mui.FormControl fullWidth>
              <Mui.InputLabel required id="label-institucion">
                {Variables.v_TEXTOS.institucion}
              </Mui.InputLabel>
              <Mui.Select
                disabled={!vIsModoModificar}
                sx={{ width: "100%" }}
                labelId="label-institucion"
                value={vInstitucion}
                label={Variables.v_TEXTOS.institucion}
                onChange={handleChange}
              >
                {mInstituciones()}
              </Mui.Select>
            </Mui.FormControl>
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
              disabled={!vIsModoModificar}
              required
              label={Variables.v_TEXTOS.correo}
              value={vCorreo}
              onChange={(evt) => setvCorreo(evt.target.value)}
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
                <CDialogConfirmarEliminacion
                  vAccionAceptar={mAccionBotonSecundario}
                />
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
