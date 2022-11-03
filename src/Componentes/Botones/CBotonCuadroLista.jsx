/*
SmartSoft
Componente: CBotonCuadroLista
Fecha de creacion: 20/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente es un contendor usado para cambiar la vista de cuadros a listas y viceversa

Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";
import * as Mui from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

/*
Function CBotonCuadroLista
  En props recibe el metodo mSeleccionarLista

Este componente se encarga de cambiar el valor de ese metodo a:
  true cuando el usuario da clic en el icono lista
  false cuando el usuario da clic en el icono de cuadros

Cuando uses este componente debes:
  1. importar el componente:
    import BotonCuadroLista from "../Componentes/Botones/CBotonCuadroLista"; //cambiale la ruta

  2. hacer la siguiente declaracion:
    const [vVistaLista, setvVistaLista] = React.useState(true) //le puedes cambiar los nombres a tu variable y a tu setVariable
  3. llamar al componente para mostrarlo en la interfaz:
    <BotonCuadroLista mSeleccionarLista={setvVistaLista} /> //En la variable vVistaLista se guarta el true o false, usa esa variable para cambiar la "vista" en tu interfaz
*/
export default function CBotonCuadroLista(props) {
  const { mSeleccionarLista } = props;

  return (
    <Mui.Box sx={{ background: "#D1D7E3", m: 1, width: 80, height: 40 }}>
      <Mui.Stack
        direction="row"
        divider={<Mui.Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Mui.IconButton onClick={() => mSeleccionarLista(false)}>
          <ViewModuleIcon />
        </Mui.IconButton>

        <Mui.IconButton onClick={() => mSeleccionarLista(true)}>
          <ViewListIcon />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.Box>
  );
}


