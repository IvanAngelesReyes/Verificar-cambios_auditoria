import React from "react";
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import Button from "@mui/material/Button";
import * as Variables from "../../Global/Variables";
import CDatosEvento from "../../Componentes/Configuraciones/Datos principales del evento/CDatosEvento";
import DatosAlmacenados from "../../Componentes/Configuraciones/Sobre los datos almacenados/DatosAlmacenados";


export default function CConfiguraciones(props) {

  const [expanded, setExpanded] = React.useState(false);

  const [vIsCargado, setvIsCargado] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  const mAbrirAlerta = () => {
    setState({ ...state, open: true });
  }

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
        <Mui.Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
          <Mui.AccordionSummary
            expandIcon={<Icon.ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Mui.Typography>
              {Variables.v_TEXTOS.configuraciones.conf1.text1}
            </Mui.Typography>
          </Mui.AccordionSummary>
          <Mui.AccordionDetails>
            <CDatosEvento
              setOpenAlert={mAbrirAlerta}
              {...props}
            />
          </Mui.AccordionDetails>
        </Mui.Accordion>
        <Mui.Accordion expanded={expanded === "2"} onChange={handleChange("2")}>
          <Mui.AccordionSummary
            expandIcon={<Icon.ExpandMore />}
            aria-controls="panel2a-content"
            id="panel1a-header"
          >
            <Mui.Typography>
              {Variables.v_TEXTOS.configuraciones.conf2.text1}
            </Mui.Typography>
          </Mui.AccordionSummary>
          <Mui.AccordionDetails></Mui.AccordionDetails>
        </Mui.Accordion>
        <Mui.Accordion expanded={expanded === "3"} onChange={handleChange("3")}>
          <Mui.AccordionSummary
            expandIcon={<Icon.ExpandMore />}
            aria-controls="panel3a-content"
            id="panel1a-header"
          >
            <Mui.Typography>
              {Variables.v_TEXTOS.configuraciones.conf3.text1}
            </Mui.Typography>
          </Mui.AccordionSummary>
          <Mui.AccordionDetails>
            <DatosAlmacenados/>
          </Mui.AccordionDetails>
        </Mui.Accordion>
        <Mui.Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            {Variables.v_TEXTOS.alertas.configuracion.exito}
          </Alert>
        </Mui.Snackbar>
      </Mui.Paper>
    );
  }
}
