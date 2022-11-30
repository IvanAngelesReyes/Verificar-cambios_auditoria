/*
SmartSoft
Componente: CConsultaAuxiliar
Fecha de creacion: 27/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Interfaz para el tab busqueda del CCRUDAuxiliares, despliega las tarjetas de los Auxiliares y las filtra

Numero de metodos: 
Componentes relacionados: CTarjetaCuadroAuxiliar, CTarjetaListaAuxiliar, CBotonCuadroLista
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import BotonCuadroLista from "../Botones/CBotonCuadroLista";
import TarjetaCuadroAuxiliar from "./Tarjetas/CTarjetaCuadroAuxiliar";
import TarjetaListaAuxiliar from "./Tarjetas/CTarjetaListaAuxiliar";

export default function CConsultaAuxiliar(props) {
  const {
    vRegistrosAuxiliares,
    setVRegistrosAuxiliares,
    mRefresaacarPantalla,
    setvAcctualizarEstado,
    vInstituciones,
  } = props;

  const [vKey, setVKey] = React.useState(Date.now());

  const [vListaInstituciones, setVListaInstituciones] = React.useState([]);
  const [vRegistrosFiltrados, setVRegistrosFiltrados] = React.useState([]);
  const [vVistaLista, setvVistaLista] = React.useState(true);
  const [vInstitucionSeleccionada, setVInstitucionSeleccionada] =
    React.useState("Todo");

  const [vFiltroOrden, setVFiltroOrden] = React.useState(
    Variables.v_TEXTOS.orden.ascendente
  );

  const [vIsFiltro, setVIsFiltro] = React.useState(true);

  const mfiltroInstituciones = async (vRegistros) => {
    return await vRegistros.filter((item) => {
      return vInstitucionSeleccionada === "Todo"
        ? true
        : item.institucion === vInstitucionSeleccionada;
    });
  };

  const mFiltroOrden = async (vRegistros) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) =>
        a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
      );
    } else {
      return await vRegistros.sort((a, b) =>
        a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0
      );
    }
  };

  const mActulizarFiltro = () => {
    setVIsFiltro(true);
  };

  const mSacarInstitucion = async (vInstituciones) => {
    return [
      ...new Set(
        await vInstituciones.map((item) => {
          return item.nombre;
        })
      ),
    ].reverse();
  };

  React.useEffect(() => {
    if (vIsFiltro) {
      setvAcctualizarEstado(() => mActulizarFiltro);
      mfiltroInstituciones([...vRegistrosAuxiliares]).then((result) => {
        mFiltroOrden([...result]).then((result2) => {
          
          if (vListaInstituciones.length === 0) {
            mSacarInstitucion([...vInstituciones]).then((result3) => {
              result3.push("Todo");
              result3 = result3.reverse();
              mFiltroOrden([...result3]).then((result4) => {
                setVListaInstituciones(result4);
                setVRegistrosFiltrados(result2);
                setVIsFiltro(false);
                setVKey(Date.now());
              });
            });
          } else {
            setVRegistrosFiltrados(result2);
            setVIsFiltro(false);
            setVKey(Date.now());
          }
        });
      });

    }
  }, [vIsFiltro]);

  const mVista = () => {
    if (vVistaLista) {
      return (
        <>
          <Mui.Stack key={vKey} direction="column" spacing={2}>
            {mListasAuxiliares()}
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
            {mCuadrosAuxiliares()}
          </Mui.Grid>
        </>
      );
    }
  };

  const handleChange = (evt) => {
    setVIsFiltro(true);
    setVFiltroOrden(evt.target.value);
  };

  function mCuadrosAuxiliares() {
    if (vRegistrosFiltrados.length === 0) {
      return <p>No hay info</p>;
    } else {
      return vRegistrosFiltrados.map((item) => {
        return (
          <TarjetaCuadroAuxiliar
            mRefresaacarPantalla={mRefresaacarPantalla}
            vRegistrosAuxiliares={vRegistrosAuxiliares}
            setVRegistrosAuxiliares={setVRegistrosAuxiliares}
            vRegistro={item}
          {...props}
          />
        );
      });
    }
  }

  function mListasAuxiliares() {
    if (vRegistrosFiltrados.length === 0) {
      return <p>sin info</p>;
    } else {
      return vRegistrosFiltrados.map((item) => {
        return (
          <TarjetaListaAuxiliar
            mRefresaacarPantalla={mRefresaacarPantalla}
            vRegistrosAuxiliares={vRegistrosAuxiliares}
            setVRegistrosAuxiliares={setVRegistrosAuxiliares}
            vRegistro={item}
            {...props}
          />
        );
      });
    }
  }

  return (
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
      <Mui.Stack key={vKey} direction="column" spacing={2}>
        <Mui.Grid container spacing={2}>
          <Mui.Grid item xs={6}>
            <Mui.Typography variant="body1" component="div">
              {Variables.v_TEXTOS.busqueda_por}
            </Mui.Typography>
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
          </Mui.Grid>
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
        </Mui.Grid>

        <Mui.Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <BotonCuadroLista mSeleccionarLista={setvVistaLista} />
        </Mui.Stack>

        {mVista()}
      </Mui.Stack>
    </Mui.Box>
  );
}
