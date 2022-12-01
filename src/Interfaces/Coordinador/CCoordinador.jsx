/*
SmartSoft
Componente: CCoordinador
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 3
Componentes relacionados: CRedactarCorreos
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";

import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";

import CSalas from "./CSalas";
import CHome from "./CHome";
import CDesktop from "../../Componentes/Desktop/CDesktop";
import CConsultaModeradoresYConsejeros from "./CConsultaModeradoresYConsejeros";
import CDialogPerfilAuxiliar from "../../Componentes/Dialogs/CDialogPerfilAuxiliar";

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

  React.useEffect(() => {
    Gets.mGetCoordinadores(setVRegistrosCoordinadores);
    Gets.mGetModeradores(setVRegistrosModeradores);
    Gets.mGetSalas(setvSalasCargadas,setvKeySalas);
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
    //console.log(vModeradoresTmp)
    setVRegistrosCoordinadores(vModeradoresTmp);
    //vActualizarEstado();
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
          //onClick = {()=>
          <CDialogPerfilAuxiliar
            setvAcctualizarEstado={mActualizarEstado}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
            vUsuario={vUsuario}
            //vRegistrosAuxiliares={vRegistrosAuxiliares}
            //setVRegistrosAuxiliares={mActualziarCoordinarodes}
            mRefresaacarPantalla={mRefresaacarPantalla}
          />
          //}
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
        return (
          <CSalas
            key={vKey}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
            vSalasCargadas={vSalasCargadas}
            mCargarSalas={mCargarSalas}
          />
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
