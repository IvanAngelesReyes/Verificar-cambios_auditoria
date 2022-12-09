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

  React.useEffect(() => {
    Gets.mGetCoordinadores(setVRegistrosCoordinadores);
    Gets.mGetModeradores(setVRegistrosModeradores);
    Gets.mGetSalas(setvSalasCargadas,setvKeySalas);
    Gets.mGetConsejeros(setVRegistrosConsejeros);
    Gets.mGetUniversidades(setVInstituciones);
  }, []);

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
    setvKey(Date.now(0))
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
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AccountBalance />,
        texto: Variables.v_MenuCoordinador.item3,
        mAccion: mSetvContenido,
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
            vSalasCargadas={vSalasCargadas}
            setvSalasCargadas={setvSalasCargadas}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mActualziarSalas={mActualziarSalas}
            setvAcctualizarEstado={mActualizarEstado}
          />
        );
        case Variables.v_MenuCoordinador.item3:
          let tmp = [];
          tmp = vRegistrosConsejeros.vConsejeros;        ;
          let consejeros = tmp.map(m=>{
            return {apellido_materno:m.apellido_materno,
              apellido_materno:m.apellido_materno,
              apellido_paterno:m.apellido_paterno,
              area_interes_1:m.area_interes_1,
              area_interes_2:m.area_interes_2,
              correo:m.correo,
              estado:m.estado,
              imagen:m.imagen,
              institucion:m.institucion,
              nombre:m.nombre,
              consejero: true,
              salas: "",
              rol:m.rol,
              uid:m.uid};
          });
          consejeros = [].concat(consejeros,vRegistrosModeradores.vConsultaDataModerador);
          let RegistrosModeradores = {
            msg : "",
            vConsultaDataModerador : consejeros
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
