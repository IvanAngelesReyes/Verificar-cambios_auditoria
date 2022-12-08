/*
SmartSoft
Componente: CHome
Fecha de creacion: 19/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Esta interfaz es la opcion "Apertura y cierre de salas" del menú de coordinadores

Numero de metodos: 1
Componentes relacionados: Cuadros/CSalaActiva, Cuadros/CSalaInactiva, CBotonCuadroLista, Listas/CSalaActiva, Listas/CSalaInactiva,
*/

import React from "react";

import * as Mui from "@mui/material";
import TarjetaCuadroSalaActiva from "../../Componentes/TarjetasSalas/Cuadros/CSalaActiva";
import TarjetaListaSalaActiva from "../../Componentes/TarjetasSalas/Listas/CSalaActiva";
import TarjetaCuadroSalaInactiva from "../../Componentes/TarjetasSalas/Cuadros/CSalaInactiva";
import TarjetaListaSalaInactiva from "../../Componentes/TarjetasSalas/Listas/CSalaInactiva";
import BotonCuadroLista from "../../Componentes/Botones/CBotonCuadroLista";

import * as Variables from "../../Global/Variables";
import * as Metodos from "../../Global/Metodos";
import * as Gets from "../../Util/Gets";

//let vSalasActivas = ["sala1", "sala2", "sala3", "sala4", "sala5"];
//let vSalasInactivas = ["sala6", "sala7", "sala8", "sala9"];

export default function CHome(props) {
  const {
    vAltoNav,
    vSalasCargadas,
    mActualziarSalas,
    setvSalasCargadas,
    setVIsCargandoSalas,
    vIsCargandoSalas,
    vSede,
    vIsCargandoModeradores,
  } = props;
  //console.log(vSalasCargadas)

  const [vListarSede, setvListarSede] = React.useState([]);
  //Salas Activas
  const [vVistaListaSalasActiva, setvVistaListaSalasActiva] =
    React.useState(true);
  const [vRegistrosFiltradosActiva, setvRegistrosFiltradosActiva] =
    React.useState([]);
  const [vInstitucionSeleccionadActiva, setvInstitucionSeleccionadActiva] =
    React.useState("Todo");
  const [vFiltroOrdenActiva, setvFiltroOrdenActiva] = React.useState(
    Variables.v_TEXTOS.orden.ascendente
  );
  const [vIsFiltroActiva, setvIsFiltroActiva] = React.useState(true);

  //Salas inactivas
  const [vVistaListaSalasInactivas, setvVistaListaSalasInactivas] =
    React.useState(true);
  const [vRegistrosFiltradosInactivas, setvRegistrosFiltradosInactivas] =
    React.useState([]);

  const [
    vInstitucionSeleccionadaInactiva,
    setvInstitucionSeleccionadaInactiva,
  ] = React.useState("Todo");
  const [vFiltroOrdenInactiva, setvFiltroOrdenInactiva] = React.useState(
    Variables.v_TEXTOS.orden.ascendente
  );
  const [vIsFiltroInactiva, setvIsFiltroInactiva] = React.useState(true);

  const [vKey, setVKey] = React.useState(Date.now());

  const [vSalas, setvSalas] = React.useState([]);
  const [vSalasActivas, setvSalasActivas] = React.useState([]);
  const [vSalasInactivas, setvSalasInactivas] = React.useState([]);
  const [vIsCargadoActivo, setvIsCargadoActivo] = React.useState(true);
  const [vIsCargadoInactivo, setvIsCargadoInactivo] = React.useState(true);

  const [pageInactivo, setPageInactivo] = React.useState(1);
  const handleChangePagesInactivo = (event, value) => {
    console.log(value);
    setPageInactivo(value);
    setVKey(Date.now());
  };
  const [pageActivo, setPageActivo] = React.useState(1);
  const handleChangePagesActivo = (event, value) => {
    setPageActivo(value);
    setVKey(Date.now());
  };
  const mActivarFiltros = () => {
  setvIsFiltroInactiva(true)
  setvIsFiltroActiva(true)
}
  const mfiltroSede = async (vRegistros, vInstitucionSeleccionada) => {
    return await vRegistros.filter((item) => {
      return vInstitucionSeleccionada === "Todo"
        ? true
        : item.sede.trim() === vInstitucionSeleccionada.trim();
    });
  };
  const mfiltroInstituciones = async (vRegistros, vInstitucionSeleccionada) => {
    return await vRegistros.filter((item) => {
      return vInstitucionSeleccionada === "Todo"
        ? true
        : item.instituciones.trim() === vInstitucionSeleccionada.trim();
    });
  };

  const mFiltroOrden = async (vRegistros, vFiltroOrden) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    } else {
      return await vRegistros.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    }
  };
  const mFiltroOrdenUbicacion = async (vRegistros, vFiltroOrden) => {
    if (vFiltroOrden === Variables.v_TEXTOS.orden.ascendente) {
      return await vRegistros.sort((a, b) =>
        a.ubicacion > b.ubicacion ? 1 : a.ubicacion < b.ubicacion ? -1 : 0
      );
    } else {
      return await vRegistros.sort((a, b) =>
        a.ubicacion < b.ubicacion ? 1 : a.ubicacion > b.ubicacion ? -1 : 0
      );
    }
  };

  const mSacarSede = async (vSede) => {
    return [
      ...new Set(
        await vSede.map((item) => {
          return item;
        })
      ),
    ].reverse();
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
    Gets.mGetSalas(setvSalasCargadas, setVKey, setVIsCargandoSalas);
    if (vSalas.length > 0) {
      if (vListarSede.length === 0) {
        mSacarSede(vSede).then((result3) => {
          mFiltroOrden([...result3], vFiltroOrdenActiva).then((result4) => {
            result4.reverse();
            result4.push("Todo");
            result4 = result4.reverse();
            setvListarSede(result4);
            setvIsFiltroActiva(false);
            setVKey(Date.now());
            setvIsCargadoActivo(false);
          });
        });
      }
      mSacarActivosInactivos(vSalas).then((result3) => {
        var [vSalasActivas, vSalasInactivas] = result3;
        if (vIsFiltroInactiva) {
          setvRegistrosFiltradosInactivas([]);
          mfiltroSede(
            [...vSalasInactivas],
            vInstitucionSeleccionadaInactiva
          ).then((result) => {
            if (result.length > 0) {
              mFiltroOrdenUbicacion([...result], vFiltroOrdenInactiva).then(
                (result2) => {
                  Metodos.chunckArrayInGroups(
                    [...result2],
                    result2.length
                  ).then((result3) => {
                    setvSalasInactivas(result3);
                    setvIsFiltroInactiva(false);
                    setVKey(Date.now());
                    setvIsCargadoInactivo(false);
                  });
                }
              );
            } else {
              setvRegistrosFiltradosInactivas([]);
              setvIsFiltroInactiva(false);
              setvIsCargadoInactivo(true);
              setVKey(Date.now());
            }
          });
        }
        if (vIsFiltroActiva) {
          setvRegistrosFiltradosActiva([]);
          mfiltroSede([...vSalasActivas], vInstitucionSeleccionadActiva).then(
            (result) => {
              if (result.length > 0) {
                mFiltroOrdenUbicacion([...result], vFiltroOrdenActiva).then(
                  (result2) => {
                    Metodos.chunckArrayInGroups(
                      [...result2],
                      result2.length
                    ).then((result3) => {
                      setvSalasActivas(result3);
                      setvRegistrosFiltradosActiva(result3);
                      setvIsFiltroActiva(false);
                      setVKey(Date.now());
                      setvIsCargadoActivo(false);
                    });
                  }
                );
              } else {
                setvSalasActivas([]);
                setvRegistrosFiltradosActiva([]);
                setvIsFiltroActiva(false);
                setvIsCargadoActivo(false);
                setVKey(Date.now());
              }
            }
          );
        }
      });
    }
    if (vSalasCargadas.length > 0) {
      setvSalas(vSalasCargadas);
    } else {
      setvIsCargadoActivo(false);
      setvIsCargadoInactivo(false);
    }
  }, [
    vSalasCargadas.length,
    vSalas.length,
    vIsFiltroInactiva,
    vIsFiltroActiva,
    vKey,
  ]);

  const handleChangeIncactiva = (evt) => {
    setvIsFiltroInactiva(true);
    setvFiltroOrdenInactiva(evt.target.value);
  };
  const handleChangeActiva = (evt) => {
    setvIsFiltroActiva(true);
    setvFiltroOrdenActiva(evt.target.value);
  };

  const mSacarActivosInactivos = async (vSalasTmp) => {
    var vSalasActivasTmp = [];
    var vSalasInactivasTmp = [];
    vSalasTmp.map((item) => {
      if (item.estado === "Activa") {
        vSalasActivasTmp.push(item);
      } else if (item.estado !== "Cerrada") {
        vSalasInactivasTmp.push(item);
      } else {
        //vSalasInactivasTmp.push(item);
      }
    });
    return [[...vSalasActivasTmp], [...vSalasInactivasTmp]];
  };

  function mCuadrosSalasActivas(vSalasAvtivas) {
    console.log("cuadros 2")
    return vSalasAvtivas.map((item) => (
      <TarjetaCuadroSalaActiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        mActivarFiltros={mActivarFiltros}
        vRegistro={item}
      />
    ));
  }
  function mListasSalasActivas(vSalasAvtivas) {
    return vSalasAvtivas.map((item) => (
      <TarjetaListaSalaActiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        mActivarFiltros={mActivarFiltros}
        vRegistro={item}
      />
    ));
  }
  function mCuadrosSalasInactivas(vSalasInactivas) {
    return vSalasInactivas.map((item) => (
      <TarjetaCuadroSalaInactiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        vRegistro={item}
        mActivarFiltros={mActivarFiltros}
        {...props}
      />
    ));
  }
  function mListasSalasInactivas(vSalasInactivas) {
    return vSalasInactivas.map((item) => (
      <TarjetaListaSalaInactiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        vRegistro={item}
        mActivarFiltros={mActivarFiltros}
        {...props}
      />
    ));
  }

  const mVistaSalasActivas = (vSeleccionarLista) => {
    if (!vIsCargandoSalas) {
      if (!vIsCargadoActivo) {
        if (vSalas.length === 0) {
          return (
            <Mui.Typography variant="body1" component="p">
              {Variables.v_TEXTOS.home_coordinadores.no_salas}
            </Mui.Typography>
          );
        } else {
          if (vSeleccionarLista) {
            if (vSalasActivas.length > 0) {
              return (
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                >
                  <Mui.Pagination
                    count={vSalasActivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageActivo}
                    onChange={handleChangePagesActivo}
                  />
                  <Mui.Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    {mListasSalasActivas(vSalasActivas[pageActivo - 1])}
                  </Mui.Stack>
                  <Mui.Pagination
                    count={vSalasActivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageActivo}
                    onChange={handleChangePagesActivo}
                  />
                </Mui.Stack>
              );
            } else {
              return (
                <Mui.Typography variant="body1" component="p">
                  {Variables.v_TEXTOS.home_coordinadores.no_salas_activas}
                </Mui.Typography>
              );
            }
          } else {
            if (vSalasActivas.length > 0) {
              console.log("cuadros")
              return (
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Mui.Pagination
                    count={vSalasActivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageActivo}
                    onChange={handleChangePagesActivo}
                  />
                  <Mui.Grid container spacing={5} justifyContent="center">
                    {mCuadrosSalasActivas(vSalasActivas[pageActivo - 1])}
                  </Mui.Grid>
                  <Mui.Pagination
                    count={vSalasActivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageActivo}
                    onChange={handleChangePagesActivo}
                  />
                </Mui.Stack>
              );
            } else {
              return (
                <Mui.Typography variant="body1" component="p">
                  {Variables.v_TEXTOS.home_coordinadores.no_salas_activas}
                </Mui.Typography>
              );
            }
          }
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
  };

  const mVistaSalasInactivas = (vSeleccionarLista) => {
    if (!vIsCargandoSalas && !vIsCargandoModeradores) {
      if (!vIsCargadoInactivo) {
        if (vSalas.length === 0) {
          return (
            <Mui.Typography variant="body1" component="p">
              {Variables.v_TEXTOS.home_coordinadores.no_salas}
            </Mui.Typography>
          );
        } else {
          //return <TarjetaListaSalaActiva vRegistro={item} />;
          if (vSeleccionarLista) {
            if (vSalasInactivas.length > 0) {
              return (
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Mui.Pagination
                    count={vSalasInactivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageInactivo}
                    onChange={handleChangePagesInactivo}
                  />
                  <Mui.Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: "100%" }}
                  >
                    {mListasSalasInactivas(vSalasInactivas[pageInactivo - 1])}
                  </Mui.Stack>
                  <Mui.Pagination
                    count={vSalasInactivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageInactivo}
                    onChange={handleChangePagesInactivo}
                  />
                </Mui.Stack>
              );
            } else {
              return (
                <Mui.Typography variant="body1" component="p">
                  {Variables.v_TEXTOS.home_coordinadores.no_salas_inactivas}
                </Mui.Typography>
              );
            }
          } else {
            if (vSalasInactivas.length > 0) {
              return (
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Mui.Pagination
                    count={vSalasInactivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageInactivo}
                    onChange={handleChangePagesInactivo}
                  />
                  <Mui.Grid container spacing={5} justifyContent="center">
                    {mCuadrosSalasInactivas(vSalasInactivas[pageInactivo - 1])}
                  </Mui.Grid>
                  <Mui.Pagination
                    count={vSalasInactivas.length - 1}
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    page={pageInactivo}
                    onChange={handleChangePagesInactivo}
                  />
                </Mui.Stack>
              );
            } else {
              return (
                <Mui.Typography variant="body1" component="p">
                  {Variables.v_TEXTOS.home_coordinadores.no_salas_inactivas}
                </Mui.Typography>
              );
            }
          }
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
  };

  return (
    <Mui.Box
      sx={{
        height: vAltoNav + 50,
      }}
      key={vKey}
    >
      <Mui.Stack direction="column" spacing={5}>
        <Mui.Paper elevation={3} sx={{ p: "10px" }}>
          <Mui.Stack direction="column" spacing={1}>
            <Mui.Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Mui.Typography variant="h6" component="h6">
                Salas por abrir (inactivas)
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Grid container spacing={1}>
              <Mui.Grid item xs={6}>
                <Mui.Typography variant="body1" component="div">
                  {Variables.v_TEXTOS.busqueda_por}
                </Mui.Typography>
                <Mui.Autocomplete
                  key={vKey}
                  disablePortal
                  options={vListarSede}
                  sx={{ width: "auto" }}
                  renderInput={(params) => (
                    <Mui.TextField {...params} label="Sede" />
                  )}
                  value={vInstitucionSeleccionadaInactiva}
                  inputValue={vInstitucionSeleccionadaInactiva}
                  onInputChange={(event, newInputValue) => {
                    setvIsFiltroInactiva(true);
                    if (newInputValue.length === 0) {
                      setvInstitucionSeleccionadaInactiva("Todo");
                    } else {
                      setvInstitucionSeleccionadaInactiva(newInputValue);
                    }
                  }}
                />
              </Mui.Grid>
              <Mui.Grid item xs={6}>
                <Mui.FormControl>
                  <Mui.FormLabel id="radio-buttons-group">
                    {Variables.v_TEXTOS.ordenar_salas_por}
                  </Mui.FormLabel>
                  <Mui.RadioGroup
                    value={vFiltroOrdenInactiva}
                    onChange={handleChangeIncactiva}
                    row
                    aria-labelledby="radio-buttons-group"
                    sx={{ fontSize: "12px" }}
                  >
                    <Mui.FormControlLabel
                      value={Variables.v_TEXTOS.orden.ascendente}
                      control={
                        <Mui.Radio
                          cheked={
                            vFiltroOrdenInactiva ===
                            Variables.v_TEXTOS.orden.ascendente
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
                            vFiltroOrdenInactiva ===
                            Variables.v_TEXTOS.orden.ascendente
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
              <BotonCuadroLista
                mSeleccionarLista={setvVistaListaSalasInactivas}
              />
            </Mui.Stack>

            {mVistaSalasInactivas(vVistaListaSalasInactivas)}
          </Mui.Stack>
        </Mui.Paper>

        <Mui.Paper elevation={3} sx={{ p: "10px" }}>
          <Mui.Stack direction="column" spacing={1}>
            <Mui.Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Mui.Typography variant="h6" component="h6">
                Salas por cerrar (activas)
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Grid container spacing={1}>
              <Mui.Grid item xs={6}>
                <Mui.Typography variant="body1" component="div">
                  {Variables.v_TEXTOS.busqueda_por}
                </Mui.Typography>
                <Mui.Autocomplete
                  key={vKey}
                  disablePortal
                  options={vListarSede}
                  sx={{ width: "auto" }}
                  renderInput={(params) => (
                    <Mui.TextField {...params} label="Sede" />
                  )}
                  value={vInstitucionSeleccionadActiva}
                  inputValue={vInstitucionSeleccionadActiva}
                  onInputChange={(event, newInputValue) => {
                    setvIsFiltroActiva(true);
                    if (newInputValue.length === 0) {
                      setvInstitucionSeleccionadActiva("Todo");
                    } else {
                      setvInstitucionSeleccionadActiva(newInputValue);
                    }
                  }}
                />
              </Mui.Grid>
              <Mui.Grid item xs={6}>
                <Mui.FormControl>
                  <Mui.FormLabel id="radio-buttons-group">
                    {Variables.v_TEXTOS.ordenar_salas_por}
                  </Mui.FormLabel>
                  <Mui.RadioGroup
                    value={vFiltroOrdenActiva}
                    onChange={handleChangeActiva}
                    row
                    aria-labelledby="radio-buttons-group"
                    sx={{ fontSize: "12px" }}
                  >
                    <Mui.FormControlLabel
                      value={Variables.v_TEXTOS.orden.ascendente}
                      control={
                        <Mui.Radio
                          cheked={
                            vFiltroOrdenActiva ===
                            Variables.v_TEXTOS.orden.ascendente
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
                            vFiltroOrdenActiva ===
                            Variables.v_TEXTOS.orden.ascendente
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
              <BotonCuadroLista mSeleccionarLista={setvVistaListaSalasActiva} />
            </Mui.Stack>

            {mVistaSalasActivas(vVistaListaSalasActiva)}
          </Mui.Stack>
        </Mui.Paper>
      </Mui.Stack>
    </Mui.Box>
  );
}
