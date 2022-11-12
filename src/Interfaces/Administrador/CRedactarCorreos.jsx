/*
SmartSoft
Componente: CRedactarCorreos
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 10
Componentes relacionados: 
*/

import * as React from "react";

import * as Mui from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CRedactarCorreo from "../../Componentes/RedactarCorreo/CRedactarCorreo";
import * as Posts from "../../Util/Posts";
import * as Gets from "../../Util/Gets";
import * as Variables from "../../Global/Variables";

export default function CRedactarCorreos(props) {
  const { vAltoNav } = props;

  const [vIsCargado, setvIsCargado] = React.useState(false);

  //Correo 1
  const [c1Asunto, setc1Asunto] = React.useState(null);
  const [c1Contenido, setc1Contenido] = React.useState(null);
  //Correo 2
  const [c2Asunto, setc2Asunto] = React.useState(null);
  const [c2Contenido, setc2Contenido] = React.useState(null);
  //Correo 3
  const [c3Asunto, setc3Asunto] = React.useState(null);
  const [c3Contenido, setc3Contenido] = React.useState(null);
  //Correo 4
  const [c4Asunto, setc4Asunto] = React.useState(null);
  const [c4Contenido, setc4Contenido] = React.useState(null);
  //Correo 9
  const [c9Asunto, setc9Asunto] = React.useState(null);
  const [c9Contenido, setc9Contenido] = React.useState(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      setvKeyCorreos(Date.now());
    };

  const [vKeyCorreos, setvKeyCorreos] = React.useState(Date.now());

  React.useEffect(() => {
    if (!vIsCargado) {
      Gets.mGetInfoCorreos(1, setc1Asunto, setc1Contenido);
      Gets.mGetInfoCorreos(3, setc2Asunto, setc2Contenido);
      Gets.mGetInfoCorreos(4, setc3Asunto, setc3Contenido);
      Gets.mGetInfoCorreos(6, setc4Asunto, setc4Contenido);
      Gets.mGetInfoCorreos(9, setc9Asunto, setc9Contenido);
    }
    if (
      c1Asunto !== null &&
      c1Contenido !== null &&
      c2Asunto !== null &&
      c2Contenido !== null &&
      c3Asunto !== null &&
      c3Contenido !== null &&
      c4Asunto !== null &&
      c4Contenido !== null &&
      c9Asunto !== null &&
      c9Contenido !== null
    ) {
      setvIsCargado(true);
    } else {
      setvIsCargado(false);
    }
  }, [
    c1Asunto,
    c1Contenido,
    c2Asunto,
    c2Contenido,
    c3Asunto,
    c3Contenido,
    c4Asunto,
    c4Contenido,
    c9Asunto,
    c9Contenido,
  ]);

  const handleClick = (vTipo, vAsunto, vCuerpo) => {
    Posts.mGuardarCorreo(vTipo, vAsunto, vCuerpo);
    setState({ ...state, open: true });
  };

  //variables para el alert
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <Mui.Alert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  if (!vIsCargado) {
    return (
      <Mui.Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Mui.CircularProgress />
      </Mui.Stack>
    );
  } else {
    return (
      <Mui.Paper elevation={1} sx={{ height: "auto" }}>
        <Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              {Variables.v_TEXTOS.redactar_correos.correo1.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CRedactarCorreo
              key={vKeyCorreos}
              vTitulo=""
              vTituloCuerpoCorreo="Cuerpo del correo"
              comentarios=""
              vValueAsunto={c1Asunto}
              mCambiarValueAsunto={setc1Asunto}
              vValueCuerpoCorreo={c1Contenido}
              mCambiarInfoCuerpoCorreo={setc1Contenido}
              comentariosGenerales={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo1.info}
                </>
              }
            />
            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Mui.Button
                variant="contained"
                onClick={() => handleClick("1", c1Asunto, c1Contenido)}
              >
                {Variables.v_TEXTOS.guardar}
              </Mui.Button>
            </Mui.Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "2"} onChange={handleChange("2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {Variables.v_TEXTOS.redactar_correos.correo2.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CRedactarCorreo
              key={vKeyCorreos}
              vTitulo=""
              vTituloCuerpoCorreo="Cuerpo del correo"
              comentarios=""
              vValueAsunto={c2Asunto}
              mCambiarValueAsunto={(info) => setc2Asunto(info)}
              vValueCuerpoCorreo={c2Contenido}
              mCambiarInfoCuerpoCorreo={(info) => setc2Contenido(info)}
              comentariosGenerales={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo2.info}
                </>
              }
            />
            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Mui.Button
                variant="contained"
                onClick={() => handleClick("2", c2Asunto, c2Contenido)}
              >
                {Variables.v_TEXTOS.guardar}
              </Mui.Button>
            </Mui.Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "3"} onChange={handleChange("3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {Variables.v_TEXTOS.redactar_correos.correo3.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CRedactarCorreo
              key={vKeyCorreos}
              vTitulo=""
              vTituloCuerpoCorreo="Cuerpo del correo"
              comentarios=""
              vValueAsunto={c3Asunto}
              mCambiarValueAsunto={(info) => setc3Asunto(info)}
              vValueCuerpoCorreo={c3Contenido}
              mCambiarInfoCuerpoCorreo={(info) => setc3Contenido(info)}
              comentariosGenerales={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo3.info}
                </>
              }
            />
            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Mui.Button
                variant="contained"
                onClick={() => handleClick("3", c3Asunto, c3Contenido)}
              >
                {Variables.v_TEXTOS.guardar}
              </Mui.Button>
            </Mui.Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "4"} onChange={handleChange("4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {Variables.v_TEXTOS.redactar_correos.correo4.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CRedactarCorreo
              key={vKeyCorreos}
              vTitulo=""
              vTituloCuerpoCorreo="Cuerpo del correo"
              comentarios=""
              vValueAsunto={c4Asunto}
              mCambiarValueAsunto={(info) => setc4Asunto(info)}
              vValueCuerpoCorreo={c4Contenido}
              mCambiarInfoCuerpoCorreo={(info) => setc4Contenido(info)}
              comentariosGenerales={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo4.info}
                </>
              }
            />
            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Mui.Button
                variant="contained"
                onClick={() => handleClick("4", c4Asunto, c4Contenido)}
              >
                {Variables.v_TEXTOS.guardar}
              </Mui.Button>
            </Mui.Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "9"} onChange={handleChange("9")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {Variables.v_TEXTOS.redactar_correos.correo9.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CRedactarCorreo
              key={vKeyCorreos}
              vTitulo=""
              vTituloCuerpoCorreo="Cuerpo del correo"
              comentarios={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo9.comentario}
                </>
              }
              vValueAsunto={c9Asunto}
              mCambiarValueAsunto={(info) => setc9Asunto(info)}
              vValueCuerpoCorreo={c9Contenido}
              mCambiarInfoCuerpoCorreo={(info) => setc9Contenido(info)}
              comentariosGenerales={
                <>
                  <InfoIcon />{" "}
                  {Variables.v_TEXTOS.redactar_correos.correo9.info}
                </>
              }
            />
            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Mui.Button
                variant="contained"
                onClick={() => handleClick("9", c9Asunto, c9Contenido)}
              >
                {Variables.v_TEXTOS.guardar}
              </Mui.Button>
            </Mui.Stack>
          </AccordionDetails>
        </Accordion>
        <Mui.Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            {Variables.v_TEXTOS.alertas.correo_guardado.exito}
          </Alert>
        </Mui.Snackbar>
      </Mui.Paper>
    );
  }
}
