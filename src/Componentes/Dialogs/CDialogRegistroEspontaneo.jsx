import React from "react";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import * as Icon from "@mui/icons-material";
import * as Metodos from "../../Global/Metodos";
import * as Posts from "../../Util/Posts";
import * as Puts from "../../Util/Puts";
import * as Gets from "../../Util/Gets";

function mValidarRegistro(vRegistro, vModeradores, setvErrores) {
  let b = false;
  let vErroresTmp = {
    institucion: { estado: false, texto: "" },
    nombre: { estado: false, texto: "" },
    ape_paterno: { estado: false, texto: "" },
    ape_materno: { estado: false, texto: "" },
    correo: { estado: false, texto: "" },
  };
  console.log(vRegistro.institucion.length);
  console.log(vRegistro.institucion);
  if (vRegistro.institucion.length>0) {
    b = true;
    vErroresTmp = {
      ...vErroresTmp,
      institucion: { estado: false, texto: "" },
    };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      institucion: { estado: true, texto: "Debe seleccionar su institución." },
    };
  }
  if (vRegistro.nombre !== "") {
    b = true;
    vErroresTmp = {
      ...vErroresTmp,
      nombre: { estado: false, texto: "" },
    };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      nombre: { estado: true, texto: "Debe escribir su nombre." },
    };
  }
  if (vRegistro.apellido_paterno !== "") {
    b = true;
    vErroresTmp = {
      ...vErroresTmp,
      ape_paterno: { estado: false, texto: "" },
    };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      ape_paterno: {
        estado: true,
        texto: "Debe escribir su apellido paterno.",
      },
    };
  }
  if (vRegistro.apellido_materno !== "") {
    b = true;
    vErroresTmp = {
      ...vErroresTmp,
      ape_materno: { estado: false, texto: "" },
    };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      ape_materno: {
        estado: true,
        texto: "Debe escribir su apellido materno.",
      },
    };
  }

  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      vRegistro.correo
    )
  ) {
    b = true;
    vErroresTmp = { ...vErroresTmp, correo: { estado: false, texto: "" } };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      correo: { estado: true, texto: "No tiene el formato de un correo." },
    };
  }
  if (
    vModeradores.filter((item) => {
      return vRegistro.correo === item.correo;
    }).length === 0
  ) {
    b = true;
    vErroresTmp = { ...vErroresTmp, correo: { estado: false, texto: "" } };
  } else {
    b = false;
    vErroresTmp = {
      ...vErroresTmp,
      correo: {
        estado: true,
        texto: "El correo ya esta registrado en otro moderador.",
      },
    };
  }
  console.log(vErroresTmp);
  setvErrores(vErroresTmp);

  return b;
}

function mLimpiarDatos(
  mSetNombre,
  mSetCorreo,
  mSetContrasenia,
  mSetInstitucion
) {
  mSetNombre("");
  mSetCorreo("");
  mSetInstitucion("");
}

function mInstituciones(vInstituciones, vRegistrosAuxiliares) {
  var vInstitucionesTmp = [];
  vInstituciones.map((item, index) => {
    vInstitucionesTmp.push(
      <Mui.MenuItem value={item.nombre}>{item.nombre}</Mui.MenuItem>
    );
  });
  return vInstitucionesTmp;
}

export default function CDialogDetallesSala(props) {
  const {
    vSala,
    mActualziarSalas,
    setVKey,
    vRegistrosModeradores,
    vUsuario,
    vInstituciones,
  } = props;
  const [open, setOpen] = React.useState(false);

  const [vInstitucion, setvInstitucion] = React.useState("");
  const [vNombre, setvNombre] = React.useState("");
  const [vApePaterno, setvApePaterno] = React.useState("");
  const [vApeMaterno, setvApeMaterno] = React.useState("");
  const [vCorreo, setvCorreo] = React.useState("");
  const [vModerador, setvModerador] = React.useState({});
  const [vModeradores, setvModeradores] = React.useState([]);
  const [vModeradorSeleccionado, setvModeradorSeleccionado] = React.useState(
    {}
  );

  const [vErrores, setvErrores] = React.useState({
    institucion: { estado: false, texto: "" },
    nombre: { estado: false, texto: "" },
    ape_paterno: { estado: false, texto: "" },
    ape_materno: { estado: false, texto: "" },
    correo: { estado: false, texto: "" },
  });

  const [vFiltroOrden, setVFiltroOrden] = React.useState(
    Variables.v_TEXTOS.orden.ascendente
  );

  const vDetalles_Sala = Variables.v_TEXTOS.detalles_sala;

  const mFiltroOrden = async (vRegistros) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    } else {
      return await vRegistros.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    }
  };

  React.useEffect(() => {
    if (vSala?.moderador !== undefined && vSala?.moderador.length > 0) {
      Gets.mGetModerador(setvModerador, vSala?.moderador);
    }
    mFiltroOrden([...vRegistrosModeradores.vConsultaDataModerador]).then(
      (result) => {
        result.reverse();
        result.push("Crear moderador");
        result = result.reverse();
        setvModeradores(result);
      }
    );
  }, [vSala?.moderador, vSala?.moderador.length]);

  const handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case Variables.v_TEXTOS.institucion:
        setvInstitucion(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleClick = () => {
    if (vModeradorSeleccionado.nombre === undefined) {
      const vRegistro = {
        uid: Date.now(),
        institucion: vInstitucion,
        nombre: vNombre,
        apellido_paterno: vApePaterno,
        apellido_materno: vApeMaterno,
        correo: vCorreo,
        salas: vSala._id,
        password: Metodos.generatePasswordRand(
          Math.random() * (20 - 5) + 5,
          "more"
        ),
        imagen: "null",
        rol: "MODERADOR_ROLE",
        area_interes_1: "",
        area_interes_2: "",
        estado: true,
      };

      if (mValidarRegistro(vRegistro, vModeradores, setvErrores)) {
        var mAgregarModerador = (vModeradorRegistrado) => {
          vSala.moderador = vModeradorRegistrado.uid;
          Posts.mEnviarCorreo(
            "2",
            vModeradorRegistrado.correo,
            vRegistro.password
          );
          Puts.mModifcarSalas(vSala);

          mActualziarSalas(vSala, setVKey);
          mLimpiarDatos(setvNombre, setvCorreo);
          handleClose();
        };
        Posts.mAgregarModeradorEspontaneo(vRegistro, mAgregarModerador);
      } else {
        console.log("datos incorrectos, no se registro al coordinador");
      }
    } else {
      if (vModeradorSeleccionado.salas !== "PENDIENTE") {
        vModeradorSeleccionado.salas =
          vModeradorSeleccionado.salas + ", " + vSala._id;
      } else {
        vModeradorSeleccionado.salas = vSala._id;
      }
      Puts.mModificarModerador(vModeradorSeleccionado);
      vSala.moderador = vModeradorSeleccionado.uid;
      Posts.mEnviarCorreo(
        "2",
        vModeradorSeleccionado.correo,
        "Ya cuenta con una contraseña establecida"
      );
      Puts.mModifcarSalas(vSala);

      mActualziarSalas(vSala, setVKey);
      mLimpiarDatos(setvNombre, setvCorreo);
      handleClose();
    }
  };

  return (
    <>
      <Mui.Button variant="outlined" onClick={handleClickOpen}>
        {vSala?.moderador !== undefined && vSala?.moderador.length > 0
          ? Variables.v_TEXTOS.cambiar_moderador_espontaneo
          : Variables.v_TEXTOS.agregar_moderador_espontaneo}
      </Mui.Button>
      <Mui.Dialog fullWidth={"sm"} onClose={handleClose} open={open}>
        <Mui.DialogContent sx={{ height: "530px" }}>
          <Mui.DialogTitle>
            <Mui.Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              {vDetalles_Sala.titulo}
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
            {vSala?.moderador !== undefined && vSala?.moderador.length > 0 && (
              <Mui.TextField
                disabled
                label={Variables.v_TEXTOS.moderador_actual}
                value={
                  vModerador.nombre +
                  " " +
                  vModerador.apellido_paterno +
                  " " +
                  vModerador.apellido_materno
                }
              />
            )}
            {vSala?.moderador.length === 0 && (
              <Mui.Autocomplete
                disablePortal
                id="combo-box-demo"
                options={vModeradores}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <>
                    <Mui.TextField
                      {...params}
                      label="Seleccionar Moderadores"
                    />
                  </>
                )}
                getOptionLabel={(option) => {
                  if (option.nombre !== undefined) {
                    return (
                      option.nombre +
                      " " +
                      option.apellido_paterno +
                      " " +
                      option.apellido_materno
                    );
                  } else {
                    return "Crear moderador";
                  }
                }}
                renderOption={(props, option) => (
                  <p
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.nombre !== undefined
                      ? option.nombre +
                        " " +
                        option.apellido_paterno +
                        " " +
                        option.apellido_materno
                      : "= " + option.toUpperCase() + " ="}
                  </p>
                )}
                onChange={(event, newValue) => {
                  if (newValue.length === 0) {
                    setvModeradorSeleccionado("Crear moderador");
                  } else {
                    setvModeradorSeleccionado(newValue);
                  }
                }}
              />
            )}
            {vModeradorSeleccionado.nombre === undefined && (
              <>
                {vUsuario.rol === undefined ? (
                  <Mui.FormControl fullWidth>
                    <Mui.InputLabel required id="label-institucion">
                      {Variables.v_TEXTOS.institucion}
                    </Mui.InputLabel>
                    <Mui.Select
                      error={vErrores.institucion.estado}
                      helperText={vErrores.institucion.texto}
                      sx={{ width: "100%" }}
                      labelId="label-institucion"
                      name={Variables.v_TEXTOS.institucion}
                      value={vInstitucion}
                      label={Variables.v_TEXTOS.institucion}
                      onChange={handleChange}
                    >
                      {mInstituciones(vInstituciones)}
                    </Mui.Select>
                  </Mui.FormControl>
                ) : (
                  <Mui.TextField
                    disabled
                    label={"Institución"}
                    value={vUsuario.institucion}
                    onChange={(evt) => setvNombre(evt.target.value)}
                  />
                )}
                <Mui.TextField
                  error={vErrores.nombre.estado}
                  helperText={vErrores.nombre.texto}
                  required
                  label={Variables.v_TEXTOS.nombre}
                  value={vNombre}
                  onChange={(evt) => setvNombre(evt.target.value)}
                />
                <Mui.TextField
                  error={vErrores.ape_paterno.estado}
                  helperText={vErrores.ape_paterno.texto}
                  sx={{ width: "100%" }}
                  required
                  label={Variables.v_TEXTOS.ape_paterno}
                  defaultValue=""
                  value={vApePaterno}
                  onChange={(e) => setvApePaterno(e.target.value)}
                />
                <Mui.TextField
                  error={vErrores.ape_materno.estado}
                  helperText={vErrores.ape_materno.texto}
                  sx={{ width: "100%" }}
                  required
                  label={Variables.v_TEXTOS.ape_materno}
                  defaultValue=""
                  value={vApeMaterno}
                  onChange={(e) => setvApeMaterno(e.target.value)}
                />
                <Mui.TextField
                  error={vErrores.correo.estado}
                  helperText={vErrores.correo.texto}
                  required
                  label={Variables.v_TEXTOS.correo}
                  value={vCorreo}
                  onChange={(evt) => setvCorreo(evt.target.value)}
                />
              </>
            )}
            <Mui.Grid
              container
              sx={{ width: "100%" }}
              spacing={2}
              columns={2}
              justifyContent="center"
              alignItems="center"
            >
              <Mui.Button
                onClick={handleClick}
                sx={{ marginLeft: 5 }}
                variant="contained"
              >
                {Variables.v_TEXTOS.asignar}
              </Mui.Button>
            </Mui.Grid>
          </Mui.Stack>
        </Mui.DialogContent>
      </Mui.Dialog>
    </>
  );
}
