import * as React from 'react';

import * as Mui from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import * as Variables from "../../Global/Variables";
import TarjetaCuadroConsejeros from "../../Componentes/TarjetasPerfiles/Cuadros/CConsejero";
import TarjetaListaConsejeros from "../../Componentes/TarjetasPerfiles/Listas/CConsejero";
import BotonCuadroLista from "../../Componentes/Botones/CBotonCuadroLista";

let vConsejeros = [
  "Alejandra",
  "Rubi",
  "Leandro",
  "Ivan",
  "Rafael",
  "Patricia",
  "Monica",
];

const vListaInstituciones = ["Todo", "UNAM", "UAPT", "UEAMEX"];

const vListaOpciones = ["Todo", "Moderadores", "Consejeros"];

export default function CConsejeros(props){
    const [vKey] = React.useState(Date.now());
    const [users] = React.useState([])
    const [search] = React.useState("");

    React.useState(true);
    const [vVistaListaConsejeros, setvVistaListaConsejeros] =
    React.useState(true);

    const [vInstitucionSeleccionada, setVInstitucionSeleccionada] =
    React.useState("Todo");
    const [vRolSeleccionada, setVRolSeleccionada] =
    React.useState("Todo");
    const [vFiltroOrden, setVFiltroOrden] = React.useState(
      Variables.v_TEXTOS.orden.ascendente
    );

    const [setVIsFiltro] = React.useState(true);


  const mVistaConsejeros = () => {
    if (vVistaListaConsejeros) {
      return (
        <>
          <Mui.Stack key={vKey} direction="column" spacing={2}>
            {mListasConsejeros()}
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
            {mCuadrosConsejeros()}
          </Mui.Grid>
        </>
      );
    }
  };

  const handleChange = (evt) => {
    setVIsFiltro(true);
    setVFiltroOrden(evt.target.value);
  };

  function mCuadrosConsejeros() {
    if(vConsejeros.length === 0){
      return <p> No hay informacion </p>
    }else{
      return vConsejeros.map((item) => {
        return <TarjetaCuadroConsejeros nombre={item} />;
    });
  }
}
  function mListasConsejeros() {
    if(vConsejeros.length === 0){
      return <p> No hay informacion </p>
    }else{
      return vConsejeros.map((item) => {
        return <TarjetaListaConsejeros nombre={item} />;
    });
  }
}
  
  const searcher = (e) => {
    //setSearch(e.target.value)
    console.log(e.target.value)
  }

  let results = []
  if(!search){
    results = users
  }

    return (
      <Mui.Stack
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
      <Mui.Stack direction = "column" spacing={0.5} justifyContent="space-evenly" alignItems="center">
        <Mui.Paper component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <Mui.InputBase
        sx={{ ml: 1, flex: 1 }}
        type="text"
        //value={busqueda}
        placeholder="Escribe el nombre del moderador o consejero"
        inputProps={{ 'aria-label': 'Escribe el nombre del moderador o consejero' }}
        onChange={searcher}
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
              options={vListaOpciones}
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
              mSeleccionarLista={setvVistaListaConsejeros}
              //mSeleccionarLista2={setvVistaListaModeradores}
               />
            </Mui.Stack>

        </Mui.Stack>
        </Mui.Stack>


        <Mui.Stack direction="column" spacing={5}>
          <Mui.Stack direction="column" spacing={5}>
          <Mui.Typography variant="h5" component="h5">
          {Variables.v_TEXTOS.mostrando}
        </Mui.Typography>
          </Mui.Stack>

            {mVistaConsejeros(vVistaListaConsejeros)}
             
            </Mui.Stack>  

      </Mui.Stack>
    </Mui.Stack>   
      )
}