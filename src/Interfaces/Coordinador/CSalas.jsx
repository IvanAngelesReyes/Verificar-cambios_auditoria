/*
SmartSoft
Componente: CSalas
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 0
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";

import BotonCuadroLista from "../../Componentes/Botones/CBotonCuadroLista";
import CConsultaSalaCuadro from "../../Componentes/TarjetasSalas/Cuadros/CConsultaSala";
import CConsultaSalaLista from "../../Componentes/TarjetasSalas/Listas/CConsultaSalaLista";
import CDialogCargarSalas from "../../Componentes/Dialogs/CDialogCargarSalas";
import CDialogCargarPonentes from "../../Componentes/Dialogs/CDialogCargarPonentes";

import * as Variables from "../../Global/Variables";
import * as Metodos from "../../Global/Metodos";

export default function CSalas(props) {
  const {
    vSalasCargadas,
    mCargarSalas,
    mSetvFramePrincipal,
    vAltoNav,
    vAnchoNav,
  } = props;

  const [vIsCargado, setvIsCargado] = React.useState(false);
  const [vSalas, setvSalas] = React.useState([]);

  const [page, setPage] = React.useState(1);
  const handleChangePages = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  //////////////////////////

  const [vListaInstituciones, setVListaInstituciones] = React.useState([]);
  const [vRegistrosFiltrados, setVRegistrosFiltrados] = React.useState([]);
  const [vVistaLista, setvVistaLista] = React.useState(true);
  const [vKey, setVKey] = React.useState(Date.now());
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
        : item["Institucion(es)"] === vInstitucionSeleccionada;
    });
  };

  const mFiltroOrden = async (vRegistros) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) =>
        a.salon > b.salon ? 1 : a.salon < b.salon ? -1 : 0
      );
    } else {
      return await vRegistros.sort((a, b) =>
        a.salon < b.salon ? 1 : a.salon > b.salon ? -1 : 0
      );
    }
  };

  const mSacarInstitucion = async (vSalas) => {
    return [
      ...new Set(
        await vSalas.map((item) => {
          return item["Institucion(es)"];
        })
      ),
    ];
  };

  const mVista = () => {
    if (vSalas.length > 0) {
      if (vIsCargado) {
        if (vVistaLista) {
          return mListasCoordinadores();
        } else {
          return <>{mCuadrosCoordinadores()}</>;
        }
      } else {
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
      }
    } else {
      return (
        <Mui.Typography variant="body1" component="p">
          {Variables.v_TEXTOS.no_salas}
        </Mui.Typography>
      );
    }
  };

  const handleChange = (evt) => {
    setVIsFiltro(true);
    setVFiltroOrden(evt.target.value);
  };

  function mCuadrosCoordinadores() {
    return vRegistrosFiltrados[page].map((item) => {
      return <CConsultaSalaCuadro vSala={item} />;
    });
  }

  function mListasCoordinadores() {
    return vRegistrosFiltrados[page].map((item) => {
      //console.log(item);
      return <CConsultaSalaLista vSala={item} />;
    });
  }

  //////////////////////////

  React.useEffect(() => {
    if (vSalas.length > 0) {
      if (vIsFiltro) {
        mfiltroInstituciones([...vSalas]).then((result) => {
          mFiltroOrden([...result]).then((result2) => {
            console.log(result2)
            setVRegistrosFiltrados(
              Metodos.chunckArrayInGroups([...result2], result2.length)
            );
            setVIsFiltro(false);
            setVKey(Date.now());
            setvIsCargado(true);
            if (vListaInstituciones.length === 0) {
              mSacarInstitucion([...vSalas]).then((result3) => {
                mFiltroOrden([...result3]).then((result4) => {
                  setVListaInstituciones(result3);
                });
              });
            }
          });
        });
      }
    }
    if (vSalasCargadas.length > 0) {
      setvSalas(vSalasCargadas);
    }
  }, [vSalasCargadas.length, vSalas.length, vIsFiltro]);

  return (
    <Mui.Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Mui.Stack key={vKey} direction="row" spacing={2}>
        <CDialogCargarSalas
          mCargarSalas={mCargarSalas}
          vAltoNav={vAltoNav}
        />
        {/*<CDialogCargarPonentes
        disabled={vSalasCargadas.length>0?false:true}
          setvSalasCargadas={setvSalasCargadas}
          vAltoNav={vAltoNav}
        /> */}
        <Mui.Button disabled size="small" variant="contained">
          {Variables.v_TEXTOS.asignar}
        </Mui.Button>
      </Mui.Stack>
      <Mui.Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}
        sx={{ alignSelf: "stretch" }}
      >
        <Mui.Grid container spacing={1}>
          <Mui.Grid item xs={6}>
            <Mui.Typography variant="body1" component="div">
              {Variables.v_TEXTOS.busqueda_por}
            </Mui.Typography>
            <Mui.Autocomplete
              key={vKey}
              disablePortal
              options={vListaInstituciones}
              sx={{ width: "auto" }}
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
                sx={{ fontSize: "12px" }}
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
          sx={{ width: "100%" }}
        >
          <BotonCuadroLista mSeleccionarLista={setvVistaLista} />
        </Mui.Stack>

        <Mui.Box
          className="tabla1"
          sx={{
            height: vAltoNav - 200,
            width: vAnchoNav - 280,
          }}
        >
          <Mui.Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Mui.Pagination
              count={vRegistrosFiltrados.length-1}
              shape="rounded"
              showFirstButton showLastButton
              page={page} onChange={handleChangePages}
            />
            <Mui.Grid
              key={vKey}
              container
              sx={{ width: "100%", height: "100%" }}
              spacing={0}
              justifyContent="center"
              alignItems="flex-start"
            >
              {mVista()}
            </Mui.Grid>
            <Mui.Pagination
              count={vRegistrosFiltrados.length-1}
              shape="rounded"
              showFirstButton showLastButton
              page={page} onChange={handleChangePages}
            />
          </Mui.Stack>
        </Mui.Box>
      </Mui.Stack>
    </Mui.Stack>
  );
}
