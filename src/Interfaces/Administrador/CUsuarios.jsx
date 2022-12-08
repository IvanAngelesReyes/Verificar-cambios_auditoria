/*
SmartSoft
Componente: 
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 1
Componentes relacionados: 
*/

import React from "react";
import PropTypes from "prop-types";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";

import CCRUDAuxiliares from "../../Componentes/Usuarios/CCRUDAuxiliares";
import CConsultaModeradoresYConsejeros from "../../Componentes/Usuarios/CConsultaModeradoresYConsejeros";

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

export default function CUsuarios(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Mui.Box sx={{ width: "100%" }}>
      <Mui.Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Mui.Tabs value={value} onChange={handleChange}>
          <Mui.Tab label={Variables.v_TEXTOS.usuarios.tab1} {...a11yProps(0)} />
          <Mui.Tab label={Variables.v_TEXTOS.usuarios.tab2} {...a11yProps(1)} />
        </Mui.Tabs>
      </Mui.Box>
      <TabPanel value={value} index={0}>
        <CCRUDAuxiliares {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CConsultaModeradoresYConsejeros {...props} />
      </TabPanel>
    </Mui.Box>
  );
}
