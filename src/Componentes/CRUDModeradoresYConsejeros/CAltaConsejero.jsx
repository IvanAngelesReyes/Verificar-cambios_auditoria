/*
SmartSoft
Componente: CAltaCoordinador
Fecha de creacion: 20/11/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion:

Numero de metodos: 
Componentes relacionados: ninguno
*/

import React from "react";
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import * as Variables from "../../Global/Variables";
import * as Metodos from "../../Global/Metodos";
import * as Posts from "../../Util/Posts";

const vListaInstituciones = ["UNAM", "UAPT", "UEAMEX"];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <Mui.Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * 
 * @returns 
 */
function mInstituciones() {
  return vListaInstituciones.map((item, index) => (
    <Mui.MenuItem value={item}>{item}</Mui.MenuItem>
  ));
}

/**
 * 
 * @param {*} vRegistro 
 * @returns 
 */
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

/**
 * 
 * @param {*} mSetNombre 
 * @param {*} setvApePaterno 
 * @param {*} setvApeMaterno 
 * @param {*} mSetCorreo 
 * @param {*} mSetContrasenia 
 * @param {*} mSetInstitucion 
 */
function mLimpiarDatos(
  mSetNombre,
  setvApePaterno,
  setvApeMaterno,
  mSetCorreo,
  mSetContrasenia,
  mSetInstitucion
) {
  mSetNombre("");
  setvApePaterno("");
  setvApeMaterno("");
  mSetCorreo("");
  mSetContrasenia(
    Metodos.generatePasswordRand(Math.random() * (20 - 5) + 5, "more")
  );
  mSetInstitucion("");
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function CAltaCoordinador(props) {
  //variables que recibo en props
  const { vRegistrosCoordinadores, setVRegistrosCoordinadores } = props;

  //variables para el alert
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  //variables para los datos
  const [vNombre, setvNombre] = React.useState("");
  const [vApePaterno, setvApePaterno] = React.useState("");
  const [vApeMaterno, setvApeMaterno] = React.useState("");
  const [vInstitucionProcedencia, setvInstitucionProcedencia] =
    React.useState("");
  const [vCorreo, setvCorreo] = React.useState("");
  const [vContrasenia, setvContrasenia] = React.useState(
    Metodos.generatePasswordRand(Math.random() * (20 - 5) + 5, "more")
  );
  const [vInstitucion, setvInstitucion] = React.useState("");
  const [vShowPassword, setvShowPassword] = React.useState(false);
  const [vImagen, setvImagen] = React.useState({ url: "", file: {} });
  //FIN VARIABLES

  //metodos para registrar al coordinador
  const handleClickShowPassword = () => {
    setvShowPassword(!vShowPassword);
  };
  const handleClick = () => {
    const vRegistro = {
      uid: Date.now(),
      institucion: vInstitucion,
      nombre: vNombre,
      apellido_paterno: vApePaterno,
      apellido_materno: vApeMaterno,
      correo: vCorreo,
      salas: [],
      password: vContrasenia,
      imagen: [],
      rol: "COORDINADOR_ROLE",
      estado: true,
    };

    if (mValidarRegistro(vRegistro)) {
      let vRegistrosCoordinadoresTmp = vRegistrosCoordinadores;
      vRegistrosCoordinadoresTmp.push(vRegistro);

      setVRegistrosCoordinadores(vRegistrosCoordinadoresTmp);
      setState({ ...state, open: true });
      Posts.mAgregarConsejeroEnAuxiliar(vRegistro);
      Posts.mEnviarCorreo("9", vCorreo, vContrasenia);
      mLimpiarDatos(setvNombre,setvApePaterno,setvApeMaterno, setvCorreo, setvContrasenia, setvInstitucion);
    } else {
      console.log("datos incorrectos, no se registro al consejero");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case Variables.v_TEXTOS.institucion:
        setvInstitucion(event.target.value);
        break;
      case Variables.v_TEXTOS.institucion_procedencia:
        setvInstitucionProcedencia(event.target.value);
        break;
      default:
        break;
    }
  };

  const getImagen = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      setvImagen({ ...vImagen, url: e.target.result });
    };
    setvImagen({ ...vImagen, file: e.target.files[0] });
    reader.readAsDataURL(e.target.files[0]);
  };
  //FIN METODOS

  return (
    <Mui.Stack container spacing={1} alignItems="center" sx={{ width: "100%" }}>
      {/* componente para cargar la imagen
      <Mui.Button component="label" size="small">
        <input hidden onChange={(e) => getImagen(e)} accept="image/png, image/jpeg" type="file" />
        <Mui.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {vImagen.url.length>0?<img style={{borderRadius:"10px"}} src={vImagen.url} height="150"/>:<Icon.AccountBox sx={{ fontSize: 150 }} />}
          Cargar una imagen
        </Mui.Stack>
      </Mui.Button>
      */}
      <Mui.FormControl fullWidth>
        <Mui.InputLabel required id="label-institucion">
          {Variables.v_TEXTOS.institucion}
        </Mui.InputLabel>
        <Mui.Select
          sx={{ width: "100%" }}
          labelId="label-institucion"
          name={Variables.v_TEXTOS.institucion}
          value={vInstitucion}
          label={Variables.v_TEXTOS.institucion}
          onChange={handleChange}
        >
          {mInstituciones()}
        </Mui.Select>
      </Mui.FormControl>
      {/* <Mui.FormControl fullWidth>
        <Mui.InputLabel required id="label-institucion">
          {Variables.v_TEXTOS.institucion_procedencia}
        </Mui.InputLabel>
        <Mui.Select
          sx={{ width: "100%" }}
          labelId="label-institucion"
          name={Variables.v_TEXTOS.institucion_procedencia}
          value={vInstitucionProcedencia}
          label={Variables.v_TEXTOS.institucion_procedencia}
          onChange={handleChange}
        >
          {mInstituciones()}
        </Mui.Select>
      </Mui.FormControl> */}
      <Mui.TextField
        sx={{ width: "100%" }}
        required
        label={Variables.v_TEXTOS.nombre}
        defaultValue=""
        value={vNombre}
        onChange={(e) => setvNombre(e.target.value)}
      />
      <Mui.TextField
        sx={{ width: "100%" }}
        required
        label={Variables.v_TEXTOS.ape_paterno}
        defaultValue=""
        value={vApePaterno}
        onChange={(e) => setvApePaterno(e.target.value)}
      />
      <Mui.TextField
        sx={{ width: "100%" }}
        required
        label={Variables.v_TEXTOS.ape_materno}
        defaultValue=""
        value={vApeMaterno}
        onChange={(e) => setvApeMaterno(e.target.value)}
      />
      <Mui.TextField
        sx={{ width: "100%" }}
        required
        label={Variables.v_TEXTOS.correo}
        defaultValue=""
        value={vCorreo}
        onChange={(e) => setvCorreo(e.target.value)}
      />

      <Mui.FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <Mui.InputLabel htmlFor="outlined-adornment-password">
          {Variables.v_TEXTOS.contrasenia}
        </Mui.InputLabel>
        <Mui.OutlinedInput
          id="outlined-adornment-password"
          type={vShowPassword ? "text" : "password"}
          value={vContrasenia}
          valuedefault={vContrasenia}
          disabled
          endAdornment={
            <Mui.InputAdornment position="end">
              <Mui.IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {vShowPassword ? <Icon.VisibilityOff /> : <Icon.Visibility />}
              </Mui.IconButton>
            </Mui.InputAdornment>
          }
          label={Variables.v_TEXTOS.contrasenia}
        />
      </Mui.FormControl>
      
      <Mui.Button
        variant="contained"
        sx={{ width: "wrap" }}
        onClick={handleClick}
      >
        {Variables.v_TEXTOS.registrar}
      </Mui.Button>

      <Mui.Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {Variables.v_TEXTOS.alertas.alta_consejero}
        </Alert>
      </Mui.Snackbar>
    </Mui.Stack>
  );
}
