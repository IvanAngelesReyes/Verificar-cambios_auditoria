/*
SmartSoft
Componente: CCoordinador
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 3
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";

import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";

import CHome from "./CHome";
import CDesktop from "../../Componentes/Desktop/CDesktop";
import CDialogPerfilAuxiliar from "../../Componentes/Dialogs/CDialogPerfilAuxiliar";
import CCRUDModeradoresYConsejero from "../Coordinador/CCRUDModeradoresYConsejero";

export default function CCoordinador(props) {
  const { mSetvFramePrincipal, vAltoNav, vAnchoNav, vUsuario } = props;
  const vResAltoNav = 0;

  const [vContenido, mSetvContenido] = React.useState(
    Variables.v_MenuCoordinador.item2
  );

  const [vSalasCargadas, setvSalasCargadas] = React.useState([]);
  const [vRegistrosCoordinadores, setVRegistrosCoordinadores] = React.useState(
    []
  );
  const [vRegistrosModeradores, setVRegistrosModeradores] = React.useState([]);
  const [vRegistrosConsejeros, setVRegistrosConsejeros] = React.useState([]);
  const [vInstituciones, setVInstituciones] = React.useState([]);
  const [vSede, setVSede] = React.useState([]);
  //Varaibles para las esperas de peticiones:
  const [vIsCargandoSalas, setVIsCargandoSalas] = React.useState(true);
  const [vIsCargandoModeradores, setVIsCargandoModeradores] =
    React.useState(true);

  const mBuscarModeradorInstitucion = (vModeradores) => {
    setVRegistrosModeradores(
      {vConsultaDataModerador:vModeradores.vConsultaDataModerador.filter(
        (item) => item.institucion.trim() === vUsuario.institucion.trim()
      )}
    );
    setVIsCargandoModeradores();
  };
  
  React.useEffect(() => {
    Gets.mGetCoordinadores(setVRegistrosCoordinadores);
    Gets.mGetModeradores(
      mBuscarModeradorInstitucion,
      setVIsCargandoModeradores
    );

    Gets.mGetSalas(
      setvSalasCargadas,
      setvKeySalas,
      setVIsCargandoSalas,
      mSacarSede
    );
    Gets.mGetConsejeros(setVRegistrosConsejeros);
    Gets.mGetUniversidades(setVInstituciones);
  }, []);

  const mSacarSede = (vSalas) => {
    var vSedeTmp = [];
    vSalas.map((item) => {
      if (vSedeTmp.length === 0) {
        vSedeTmp.push(item.sede);
      } else {
        console.log();
        if (vSedeTmp.find((item2) => item.sede === item2) === undefined) {
          vSedeTmp.push(item.sede);
        }
      }
    });
    setVSede(vSedeTmp);
    return vSedeTmp;
  };

  const [vKey, setvKey] = React.useState(Date.now());
  const [vKeySalas, setvKeySalas] = React.useState(Date.now());
  const [vActualizarEstado, setvAcctualizarEstado] = React.useState();

  const mActualziarCoordinarodes = (vCoordinadoresTmp) => {
    console.log(vCoordinadoresTmp);
    setVRegistrosCoordinadores(vCoordinadoresTmp);
    vActualizarEstado();
  };

  const mActualizarModeradores = (vModeradoresTmp) => {
    setVRegistrosCoordinadores(vModeradoresTmp);
  };

  const mActualizarConsejeros = (vConsejerosTmp) => {
    setVRegistrosConsejeros(vConsejerosTmp);
  };

  const mCargarSalas = (vSalasNuevas) => {
    setvSalasCargadas([...vSalasCargadas, ...vSalasNuevas]);
    setvKey(Date.now(0));
  };

  const mActualziarSalas = (vSalaActualizada, setvActualizarHome) => {
    console.log(vSalaActualizada);
    setvSalasCargadas(
      vSalasCargadas.map((item) => {
        return item._id === vSalaActualizada._id ? vSalaActualizada : item;
      })
    );
    setvActualizarHome(Date.now);
  };

  const mRefresaacarPantalla = () => {
    vActualizarEstado();
  };

  const mActualizarEstado = (vActualiador) => {
    setvAcctualizarEstado(vActualiador);
  };

  

  const mMenuItems = () => {
    return [
      {
        icon: <Icon.AssignmentInd />,
        texto: Variables.v_MenuCoordinador.item1,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AssistantPhoto />,
        texto: Variables.v_MenuCoordinador.item2,
        mAccion: (vContenido) => {
          setVIsCargandoSalas(true);
          setVIsCargandoModeradores(true);
          Gets.mGetSalas(
            setvSalasCargadas,
            setvKeySalas,
            setVIsCargandoSalas,
            mSacarSede
          );
          Gets.mGetModeradores(
            mBuscarModeradorInstitucion,
            setVIsCargandoModeradores
          );
          mSetvContenido(vContenido);
        },
      },
      {
        icon: <Icon.AccountBalance />,
        texto: Variables.v_MenuCoordinador.item3,
        mAccion: (vContenido) => {
          setVIsCargandoSalas(true);
          Gets.mGetSalas(
            setvSalasCargadas,
            setvKey,
            setVIsCargandoSalas,
            mSacarSede
          );
          mSetvContenido(vContenido);
        },
      },
    ];
  };

  const mContenido = () => {
    switch (vContenido) {
      case Variables.v_MenuCoordinador.item1:
        return (
          <CDialogPerfilAuxiliar
            setvAcctualizarEstado={mActualizarEstado}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
            vUsuario={vUsuario}
            mRefresaacarPantalla={mRefresaacarPantalla}
          />
        );
      case Variables.v_MenuCoordinador.item2:
        return (
          <CHome
            key={vKeySalas}
            vUsuario={vUsuario}
            vSalasCargadas={vSalasCargadas}
            setvSalasCargadas={setvSalasCargadas}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mActualziarSalas={mActualziarSalas}
            setvAcctualizarEstado={mActualizarEstado}
            setVIsCargandoSalas={setVIsCargandoSalas}
            vIsCargandoSalas={vIsCargandoSalas}
            vSede={vSede}
            vRegistrosModeradores={vRegistrosModeradores}
            vIsCargandoModeradores={vIsCargandoModeradores}
          />
        );
      case Variables.v_MenuCoordinador.item3:
        let tmp = [];
        tmp = vRegistrosConsejeros.vConsejeros;
        let consejeros = tmp.map((m) => {
          return {
            apellido_materno: m.apellido_materno,
            apellido_materno: m.apellido_materno,
            apellido_paterno: m.apellido_paterno,
            area_interes_1: m.area_interes_1,
            area_interes_2: m.area_interes_2,
            correo: m.correo,
            estado: m.estado,
            imagen: m.imagen,
            institucion: m.institucion,
            nombre: m.nombre,
            consejero: true,
            salas: "",
            rol: m.rol,
            uid: m.uid,
          };
        });
        consejeros = [].concat(
          consejeros,
          vRegistrosModeradores.vConsultaDataModerador
        );
        let RegistrosModeradores = {
          msg: "",
          vConsultaDataModerador: consejeros,
        };
        return (
          <>
            <CCRUDModeradoresYConsejero
              {...props}
              vUsuario={vUsuario}
              vInstituciones={vInstituciones}
              setvAcctualizarEstado={mActualizarEstado}
              vRegistrosCoordinadores={vRegistrosCoordinadores}
              setVRegistrosCoordinadores={mActualziarCoordinarodes}
              mRefresaacarPantalla={mRefresaacarPantalla}
              vRegistrosModeradores={RegistrosModeradores}
              setVRegistrosModeradores={mActualizarModeradores}
              vRegistrosConsejeros={vRegistrosConsejeros}
              setVRegistrosConsejeros={mActualizarConsejeros}
            />
          </>
        );
      default:
    }
  };

  return (
    <Mui.Paper
      elevation={1}
      sx={{
        width: vAnchoNav + 40,
        height: vAltoNav + 50,
        overflow: "hidden",
      }}
    >
      <CDesktop
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}
        vItems_menu={mMenuItems()}
        vNombrePersona="Leandro Gomez Flores"
        vContenido={mContenido()}
      />
    </Mui.Paper>
  );
}
