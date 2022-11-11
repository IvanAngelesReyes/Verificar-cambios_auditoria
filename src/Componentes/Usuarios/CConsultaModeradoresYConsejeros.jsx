/*
SmartSoft
Componente: CPerfil
Fecha de creacion: 20/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion: 
Esta interfaz mostrará una lista con todos los moderadores y consejeros registrados en el sistema.

Numero de metodos: 0
Componentes relacionados: 
*/

import * as React from 'react';
import Reactt, { useState, useEffect, useRef } from 'react';
import * as Mui from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import * as Variables from "../../Global/Variables";
import TarjetaCuadroModeradores from "../../Componentes/TarjetasPerfiles/Cuadros/CModerador";
import TarjetaCuadroConsejeros from "../../Componentes/TarjetasPerfiles/Cuadros/CConsejero";
import TarjetaListaModeradores from "../../Componentes/TarjetasPerfiles/Listas/CModerador";
import TarjetaListaConsejeros from "../../Componentes/TarjetasPerfiles/Listas/CConsejero";
import BotonCuadroLista from "../../Componentes/Botones/CBotonCuadroLista";

const vListaInstituciones = ["Todo", "UNAM", "UAPT", "UAEMEX"];

const vListaRol = ["Todo", "Moderador", "Consejero"];

export default function CConsultaModeradoresYConsejeros(props) {
  const {
    vRegistrosModeradores,
    setVRegistrosModeradores,
    mRefresaacarPantalla,
    setvAcctualizarEstado } = props;

  // Gneral Focus Hook
  const UseFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

    return [htmlElRef, setFocus]
  }

  const [vKey, setVKey] = React.useState(Date.now());

  const [vRegistrosFiltradosModeradores, setVRegistrosFiltradosModeradores] =
    React.useState([]);

  const [vVistaListaModeradores, setvVistaListaModeradores] =
    React.useState(true);

  const [vInstitucionSeleccionada, setVInstitucionSeleccionada] =
    React.useState("Todo");
  const [vRolSeleccionada, setVRolSeleccionada] =
    React.useState("Todo");

  const [vFiltroOrden, setVFiltroOrden] = React.useState(
    Variables.v_TEXTOS.orden.ascendente
  );

  const [search, setSearch] = useState("");
  const [searchRef, setSearchFocus] = UseFocus();

  //Metodo de obtencion de texto
  const searcher = async (e) => {
    setSearch(e.target.value)
    let searching = "" + e.target.value;
    console.log("SEARCHER " + e.target.value);
    setVIsFiltro(true);
  }

  //Metodo de filtrado
  const [vIsFiltro, setVIsFiltro] = React.useState(true);

  const mfiltroInstituciones = async (vRegistros) => {
    return await vRegistros.filter((item) => {
      return vInstitucionSeleccionada === "Todo"
        ? true
        : item.institucion === vInstitucionSeleccionada;
    });
  };

  const mfiltroRol = async (vRegistros) => {
    return await vRegistros.filter((item) => {
      return vRolSeleccionada === "Todo" ? true
        : vRolSeleccionada === "Moderador" ? item.consejero === false
          : item.consejero === true
    });
  };

  const mfiltroBusqueda = async (vRegistros) => {
    // console.log("resultado busqueda:" + search)
    //console.log("Prueba uwu",vRegistros);
    return await vRegistros.filter((item) => {
      //const reg = new RegExp(search.value, "i");
      //return !search.value || reg.text(item.nombre)
      let text = '' + item.nombre;
      let s = search;
      let ss = searcher;
      let resultado = true;
      if (typeof (s) !== 'undefined' && s != null) {
        if (s == "") {
          return true;
        } else {
          resultado = text.toLowerCase().includes(search.toLowerCase(), 0);
          return resultado;
        }
      } else {
        return true;
      }
    });
  };

  const mFiltroOrden = async (vRegistros) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) =>
        a.nombre.toLowerCase() > b.nombre.toLowerCase()
          ? 1
          : a.nombre.toLowerCase() < b.nombre.toLowerCase()
            ? -1
            : 0
      );
    } else {
      return await vRegistros.sort((a, b) =>
        a.nombre.toLowerCase() < b.nombre.toLowerCase()
          ? 1
          : a.nombre.toLowerCase() > b.nombre.toLowerCase()
            ? -1
            : 0
      );
    }
  };

  const mActualizarFiltro = () => {
    setVIsFiltro(true)
  }

  React.useEffect(() => {
    if (vIsFiltro) {
      setvAcctualizarEstado(() => mActualizarFiltro)
      mfiltroBusqueda([...vRegistrosModeradores]).then((result) => {
        mfiltroInstituciones([...result]).then((result2) => {
          mfiltroRol([...result2]).then((result3) => {
            mFiltroOrden([...result3]).then((result4) => {
              setVRegistrosFiltradosModeradores(result4);
              setVIsFiltro(false);
              setVKey(Date.now());
              setSearchFocus();
            });
          });
        });
      });
    }

  }, [vIsFiltro]);


  const mVistaModeradores = () => {
    if (vVistaListaModeradores) {
      return (
        <>
          <Mui.Stack key={vKey} direction="column" spacing={2}>
            {mListasModeradores()}
          </Mui.Stack>
        </>
      );
    } else {
      return (
        <>
          <Mui.Grid
            key={vKey}
            container
            spacing={5}
            justifyContent="flex-start"
          >
            {mCuadrosModeradores()}
          </Mui.Grid>
        </>
      );
    }
  };

  const handleChange = (evt) => {
    setVIsFiltro(true);
    setVFiltroOrden(evt.target.value);
  };

  function mCuadrosModeradores() {
    if (vRegistrosFiltradosModeradores.length === 0) {
      return <p>No hay info</p>;
    } else {
      return vRegistrosFiltradosModeradores.map((item) => {
        return <TarjetaCuadroModeradores mRefresaacarPantalla={mRefresaacarPantalla} vRegistrosCoordinadores={vRegistrosModeradores} setVRegistrosModeradores={setVRegistrosModeradores} vRegistro={item} />;
      });
    }
  }

  function mListasModeradores() {
    if (vRegistrosFiltradosModeradores.length === 0) {
      return <p>sin info</p>;
    } else {
      return vRegistrosFiltradosModeradores.map((item) => {
        return <TarjetaListaModeradores mRefresaacarPantalla={mRefresaacarPantalla} vRegistrosModeradores={vRegistrosModeradores} setVRegistrosCoordinadores={setVRegistrosModeradores}
          vRegistro={item} />;
      });
    }
  }

  return (
    <Mui.Stack
      key={vKey}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Mui.Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        sx={{ alignSelf: "stretch" }}
      >

        <Mui.Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
          sx={{ alignSelf: "stretch" }}
        >
          <Mui.Stack direction="column" spacing={0.5} justifyContent="space-evenly" alignItems="center">
            <Mui.Paper component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
              <Mui.InputBase
                sx={{ ml: 1, flex: 1 }}
                type="text"
                value={search}
                ref={searchRef}
                onChange={searcher}
                placeholder={Variables.v_TEXTOS.buscador}
                inputProps={{ 'aria-label': 'Escribe el nombre del moderador o consejero' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" className="btnSearch">
                <SearchIcon />
              </IconButton>
            </Mui.Paper>
          </Mui.Stack>
        </Mui.Stack>


        <Mui.Typography variant="h6" component="h6">
          {Variables.v_TEXTOS.filtrar_por}
        </Mui.Typography>

        <Mui.Stack direction="row" spacing={4} justifyContent="space-evenly">
          <Mui.Stack direction="row" spacing={4} alignItems="flex-start" justifyContent="flex-start">

            <Mui.Autocomplete
              disablePortal
              options={vListaInstituciones}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <Mui.TextField {...params} label="Institución" />
              )}
              value={vInstitucionSeleccionada}
              inputValue={vInstitucionSeleccionada}
              onInputChange={(event, newInputValue) => {
                setVIsFiltro(true);
                if (newInputValue.length === 0) {
                  setVInstitucionSeleccionada("Todo");
                } else {
                  setVInstitucionSeleccionada(newInputValue);
                }
              }}
            />

            <Mui.Autocomplete
              disablePortal
              options={vListaRol}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <Mui.TextField {...params} label="Rol" />
              )}
              value={vRolSeleccionada}
              inputValue={vRolSeleccionada}
              onInputChange={(event, newInputValue) => {
                setVIsFiltro(true);
                if (newInputValue.length === 0) {
                  setVRolSeleccionada("Todo");
                } else {
                  setVRolSeleccionada(newInputValue);
                }
              }}
            />

            <Mui.Grid item xs={6}>
              <Mui.FormControl>
                <Mui.FormLabel id="radio-buttons-group">
                  {Variables.v_TEXTOS.ordenar_por}
                </Mui.FormLabel>
                <Mui.RadioGroup
                  value={vFiltroOrden}
                  onChange={handleChange}
                  row
                  aria-labelledby="radio-buttons-group"
                >
                  <Mui.FormControlLabel
                    value={Variables.v_TEXTOS.orden.ascendente}
                    control={
                      <Mui.Radio
                        cheked={
                          vFiltroOrden === Variables.v_TEXTOS.orden.ascendente
                        }
                      />
                    }
                    label={Variables.v_TEXTOS.orden.ascendente}
                  />
                  <Mui.FormControlLabel
                    value={Variables.v_TEXTOS.orden.descendente}
                    control={
                      <Mui.Radio
                        cheked={
                          vFiltroOrden === Variables.v_TEXTOS.orden.ascendente
                        }
                      />
                    }
                    label={Variables.v_TEXTOS.orden.descendente}
                  />
                </Mui.RadioGroup>
              </Mui.FormControl>
            </Mui.Grid>

            <Mui.Stack
              direction="row"
              spacing={8}
              alignItems="center"
              justifyContent="flex-end"
            >
              <BotonCuadroLista
                mSeleccionarLista={setvVistaListaModeradores}
              //mSeleccionarLista2={setvVistaListaModeradores}
              />
            </Mui.Stack>

          </Mui.Stack>
        </Mui.Stack>


        <Mui.Stack direction="column" spacing={5}>
          <Mui.Stack direction="column" spacing={5}>
            <Mui.Typography variant="h5" component="h5">

            </Mui.Typography>
          </Mui.Stack>

          {mVistaModeradores()}

        </Mui.Stack>

      </Mui.Stack>
    </Mui.Stack>
  )
}