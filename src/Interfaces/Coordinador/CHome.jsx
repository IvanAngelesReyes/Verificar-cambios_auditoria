/*
SmartSoft
Componente: CHome
Fecha de creacion: 19/10/2022, Autorizó: Rubi Esmeralda Rosales Chavero, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Esta interfaz es la opcion "Apertura y cierre de salas" del menú de coordinadores

Numero de metodos: 
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

//let vSalasActivas = ["sala1", "sala2", "sala3", "sala4", "sala5"];
//let vSalasInactivas = ["sala6", "sala7", "sala8", "sala9"];

export default function CHome(props) {
  const {
    mSetvFramePrincipal,
    vAltoNav,
    vAnchoNav,
    vUsuario,
    vSalasCargadas,
    mActualziarSalas,
    setvAcctualizarEstado,
  } = props;
  //console.log(vSalasCargadas)

  const [vVistaListaSalasActivas, setvVistaListaSalasActivas] =
    React.useState(true);
  const [vVistaListaSalasInactivas, setvVistaListaSalasInactivas] =
    React.useState(true);

  const [vKey, setVKey] = React.useState(Date.now());

  const [vSalas, setvSalas] = React.useState([]);
  const [vSalasActivas, setvSalasActivas] = React.useState([]);
  const [vSalasInactivas, setvSalasInactivas] = React.useState([]);
  const [vIsCargadoActivo, setvIsCargadoActivo] = React.useState(false);
  const [vIsCargadoInactivo, setvIsCargadoInactivo] = React.useState(false);

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

  const mFiltroOrden = async (vRegistros) => {
    if (
      Variables.v_TEXTOS.orden.ascendente ===
      Variables.v_TEXTOS.orden.ascendente
    ) {
      return await vRegistros.sort((a, b) =>
        a.salon > b.salon ? 1 : a.salon < b.salon ? -1 : 0
      );
    } else {
      return await vRegistros.sort((a, b) =>
        a.salon < b.salon ? 1 : a.salon > b.salon ? -1 : 0
      );
    }
  };

  const mSacarActivosInactivos = async (vSalasTmp) => {
    var vSalasActivasTmp = [];
    var vSalasInactivasTmp = [];
    vSalasTmp.map((item) => {
      if (item.estatus === "Activa") {
        vSalasActivasTmp.push(item);
      } else if (item.estatus !== "Cerrada") {
        vSalasInactivasTmp.push(item);
      } else {
        //vSalasInactivasTmp.push(item);
      }
    });
    return [[...vSalasActivasTmp], [...vSalasInactivasTmp]];
  };

  React.useEffect(() => {
    if (vSalas.length > 0) {
      mFiltroOrden([...vSalas]).then((result2) => {
        mSacarActivosInactivos(result2).then((result3) => {
          var [vSalasActivas, vSalasInactivas] = result3;
          Metodos.chunckArrayInGroups(vSalasActivas, vSalasActivas.length).then(
            (result4) => {
              setvSalasActivas(result4);
              setVKey(Date.now());
              setvIsCargadoActivo(true);
            }
          );
          Metodos.chunckArrayInGroups(
            vSalasInactivas,
            vSalasInactivas.length
          ).then((result4) => {
            setvSalasInactivas(result4);
            setVKey(Date.now());
            setvIsCargadoInactivo(true);
          });
        });
      });
    }
    if (vSalasCargadas.length > 0) {
      setvSalas(vSalasCargadas);
    } else {
      //setvIsCargado(true);
    }
  }, [vSalasCargadas, vSalas]);

  function mCuadrosSalasActivas(vSalasAvtivas) {
    return vSalasAvtivas.map((item) => (
      <vSalasAvtivas
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        vRegistro={item}
      />
    ));
  }
  function mListasSalasActivas(vSalasAvtivas) {
    return vSalasAvtivas.map((item) => (
      <TarjetaListaSalaActiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
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
      />
    ));
  }
  function mListasSalasInactivas(vSalasInactivas) {
    return vSalasInactivas.map((item) => (
      <TarjetaListaSalaInactiva
        setVKey={setVKey}
        mActualziarSalas={mActualziarSalas}
        vRegistro={item}
      />
    ));
  }

  const mVistaSalasActivas = (vSeleccionarLista) => {
    if (vIsCargadoActivo) {
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
                <Mui.Stack direction="column" spacing={2}>
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
  };

  const mVistaSalasInactivas = (vSeleccionarLista) => {
    if (vIsCargadoInactivo) {
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
                <Mui.Stack direction="column" spacing={2}>
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

            <Mui.Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <BotonCuadroLista
                mSeleccionarLista={setvVistaListaSalasActivas}
              />
            </Mui.Stack>

            {mVistaSalasActivas(vVistaListaSalasActivas)}
          </Mui.Stack>
        </Mui.Paper>
      </Mui.Stack>
    </Mui.Box>
  );
}
