import React from "react";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import * as Icon from "@mui/icons-material";
import * as Metodos from "../../Global/Metodos";
import * as Posts from "../../Util/Posts";
import * as Puts from "../../Util/Puts";

function mValidarRegistro(vRegistro) {
  let b = false;
  if (vRegistro.nombre !== "") {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        vRegistro.correo
      )
    ) {
      b = true;
    }
  }
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

export default function CDialogDetallesSala(props) {
  const { vSala, mActualziarSalas, setVKey } = props;
  const [open, setOpen] = React.useState(false);

  const [vNombre, setvNombre] = React.useState("");
  const [vApePaterno, setvApePaterno] = React.useState("");
  const [vApeMaterno, setvApeMaterno] = React.useState("");
  const [vCorreo, setvCorreo] = React.useState("");

  const vDetalles_Sala = Variables.v_TEXTOS.detalles_sala;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleClick = () => {
    const vRegistro = {
      id: Date.now(),
      institucion: vSala.institucion,
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
    if (mValidarRegistro(vRegistro)) {
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
  };

  return (
    <>
      <Mui.Button variant="outlined" onClick={handleClickOpen}>
        {vSala?.moderador !== undefined && vSala?.moderador.length > 0
          ? Variables.v_TEXTOS.cambiar_moderador_espontaneo
          : Variables.v_TEXTOS.agregar_moderador_espontaneo}
      </Mui.Button>
      <Mui.Dialog fullWidth={"sm"} onClose={handleClose} open={open}>
        <Mui.DialogContent>
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
            {vSala?.moderador !== undefined &&
              vSala?.moderador.length > 0 &&(
                <Mui.TextField
                  disabled
                  label={Variables.v_TEXTOS.moderador_actual}
                  value={vSala?.moderador}
                />
              )}
            <Mui.TextField
              required
              label={Variables.v_TEXTOS.nombre}
              value={vNombre}
              onChange={(evt) => setvNombre(evt.target.value)}
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
