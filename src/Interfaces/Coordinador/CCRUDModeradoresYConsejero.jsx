/*
SmartSoft
Componente: CCRUDModeradoresYConsejero
Fecha de creacion: 20/11/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion: 

Numero de metodos: 
Componentes relacionados: CBotonCuadroLista, CAltaConsejero, CConsultaModeradoresYConsejeros
*/

import * as React from "react";
import PropTypes from "prop-types";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";
import AltaConsejero from "../../Componentes/CRUDModeradoresYConsejeros/CAltaConsejero";
import ConsultaModeradoresYConsejeros from "../../Componentes/CRUDModeradoresYConsejeros/CConsultaModeradoresYConsejeros";


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Mui.Box sx={{ p: 3 }}>
          <Mui.Typography>{children}</Mui.Typography>
        </Mui.Box>
      )}
    </div>
  );
}

/**
 * Metodo principal CCRUDModeradoresYConsejeros
 * @param {*} props 
 * @returns 
 */
export default function CCRUDModeradoresYConsejero(props) {
  const { vRegistrosCoordinadores, setVRegistrosCoordinadores
    ,vRegistrosConsejeros, setVRegistrosConsejeros
    ,vRegistrosModeradores, setVRegistrosModeradores
    ,mRefresaacarPantalla,setvAcctualizarEstado } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Mui.Box sx={{ width: "100%" }}>
      <Mui.Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Mui.Tabs value={value} onChange={handleChange}>
          <Mui.Tab label={Variables.v_TEXTOS.busqueda} {...a11yProps(0)} />
          <Mui.Tab label={Variables.v_TEXTOS.alta} {...a11yProps(1)} />
        </Mui.Tabs>
      </Mui.Box>
      <TabPanel value={value} index={0}>
        <ConsultaModeradoresYConsejeros {...props}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AltaConsejero  {...props}/>
      </TabPanel>
    </Mui.Box>
  );
}
