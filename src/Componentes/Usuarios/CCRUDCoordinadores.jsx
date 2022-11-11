/*
SmartSoft
Componente: CCRUDCoordinadores
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Esta interfaz es la opcion "Coordinadores" del menú de coordinadores

Numero de metodos: 
Componentes relacionados: CBotonCuadroLista, 
*/

import * as React from "react";
import PropTypes from "prop-types";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";
import AltaCoordinadores from "../CRUDCoordinador/CAltaCoordinador";
import ConsultaCoordinadores from "../CRUDCoordinador/CConsultaCoordinador";

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

export default function CCRUDCoordinadores(props) {
  const { vRegistrosCoordinadores, setVRegistrosCoordinadores,mRefresaacarPantalla,setvAcctualizarEstado } = props;

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
        <ConsultaCoordinadores
        setvAcctualizarEstado={setvAcctualizarEstado}
        mRefresaacarPantalla={mRefresaacarPantalla}
        vRegistrosCoordinadores={vRegistrosCoordinadores}
        setVRegistrosCoordinadores={setVRegistrosCoordinadores}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AltaCoordinadores
          vRegistrosCoordinadores={vRegistrosCoordinadores}
          setVRegistrosCoordinadores={setVRegistrosCoordinadores}
        />
      </TabPanel>
    </Mui.Box>
  );
}
