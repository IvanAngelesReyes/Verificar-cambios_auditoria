/*
SmartSoft
Componente: CSalaActiva
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 1
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Puts from "../../../Util/Puts";
import * as Variables from "../../../Global/Variables";
import * as Metodos from "../../../Global/Metodos";

export default function CSalaActiva(props) {
  const {
    vRegistro,
    mActualziarSalas,
    setVKey,
    mActivarFiltros,
    vRegistrosModeradores,
  } = props;

  const [vModerador, setvModerador] = React.useState({});
  const [vKeyModerador, setvKeyModerador] = React.useState(Date.now());

  React.useEffect(() => {
    if (vRegistro?.moderador !== undefined && vRegistro?.moderador.length > 0) {
      setvModerador(
        vRegistrosModeradores.vConsultaDataModerador.filter(
          (item) => item.uid === vRegistro?.moderador
        )[0]
      );
      setvKeyModerador(Date.now())
    }
  }, [vRegistro?.moderador, vRegistro?.moderador.length]);

  const handleClick = () => {
    vRegistro.estado = "Cerrada";
    var vFechaFinal = new Date()
    vRegistro.fecha_cierre =
      vFechaFinal.getDate() +
      " de " +
      Metodos.mObtenerMes(vFechaFinal.getMonth()) +
      " de " +
      vFechaFinal.getFullYear();
    Puts.mModifcarSalas(vRegistro);
    mActualziarSalas(vRegistro, setVKey);
    mActivarFiltros();
  };

  return (
    <Mui.Paper elevation={3}>
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <Mui.Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Mui.TextField
            key={vKeyModerador}
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto16}
            defaultValue={
              vModerador.nombre +
              " " +
              vModerador.apellido_paterno +
              " " +
              vModerador.apellido_materno
            }
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto5}
            defaultValue={vRegistro.area}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto2}
            defaultValue={vRegistro.salon}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            id="standard-read-only-input"
            label={Variables.v_TEXTOS.detalles_sala.texto17}
            defaultValue={vRegistro.no_ponentes}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.Button variant="contained" onClick={handleClick}>
            Cerrar
          </Mui.Button>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
