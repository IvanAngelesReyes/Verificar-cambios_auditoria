/*
SmartSoft
Componente: CAdministrador
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 1
Componentes relacionados: CRedactarCorreos, CConfiguraciones, CSalas, CHome, CDesktop, CUsuarios, CDialogPerfilAdministrador
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";

import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";

import CRedactarCorreos from "./CRedactarCorreos";
import CConfiguraciones from "./CConfiguraciones";
import CSalas from "./CSalas";
import CHome from "./CHome";
import CDesktop from "../../Componentes/Desktop/CDesktop";
import CUsuarios from "./CUsuarios";
import CDialogPerfilAdministrador from "../../Componentes/Dialogs/CDialogPerfilAdministrador";
import { alertClasses } from "@mui/material";

export default function CAdministrador(props) {
  const { mSetvFramePrincipal, vAltoNav, vAnchoNav, vUsuario } = props;
  const vResAltoNav = 0;

  const [vContenido, mSetvContenido] = React.useState(
    Variables.v_MenuAdministrador.item2
  );
  const [vSalasCargadas, setvSalasCargadas] = React.useState([]);
  const [vRegistrosAuxiliares, setVRegistrosAuxiliares] = React.useState([]);
  const [vRegistrosModeradores, setVRegistrosModeradores] = React.useState([]);
  const [vRegistrosConsejeros, setVRegistrosConsejeros] = React.useState([]);
  const [vInstituciones, setVInstituciones] = React.useState([]);
  const [vSede, setVSede] = React.useState([]);
  const [vIsExisteManual, setVIsExisteManual] = React.useState(false);
  const [vIsExistePlantilla, setVIsExistePlantilla] = React.useState(false);
  const [vUrlWhatsapp, setVUrlWhatsapp] = React.useState("");

  //Varaibles para las esperas de peticiones:
  const [vIsCargandoSalas, setVIsCargandoSalas] = React.useState(true);
  const [vIsCargandoModeradores, setVIsCargandoModeradores] =
    React.useState(true);

  React.useEffect(() => {
    Gets.mGetAuxiliares(setVRegistrosAuxiliares);
    Gets.mGetModeradores(setVRegistrosModeradores, setVIsCargandoModeradores);
    Gets.mGetConsejeros(setVRegistrosConsejeros);
    Gets.mGetSalas(
      setvSalasCargadas,
      setvKeySalas,
      setVIsCargandoSalas,
      mSacarSede
    );
    Gets.mGetUniversidades(setVInstituciones);
    Gets.mGetManualFile(setVIsExisteManual);
    Gets.mGetCertificadoFile(setVIsExistePlantilla);
    Gets.mGetURLWhatsapp(setVUrlWhatsapp);
    //Gets.mGetUrls(setVIsExisteManual,setVUrlWhatsapp);
  }, []);

  const [vKey, setvKey] = React.useState(Date.now());
  const [vKeySalas, setvKeySalas] = React.useState(Date.now());
  const [vActualizarEstado, setvAcctualizarEstado] = React.useState();

  const mSacarSede = (vSalas) => {
    var vSedeTmp = [];
    vSalas.map((item) => {
      if (vSedeTmp.length === 0) {
        vSedeTmp.push(item.sede);
      } else {
        console.log();
        if (vSedeTmp.find((item2) => item.sede === item2)===undefined) {
          vSedeTmp.push(item.sede);
        }
      }
    });
    setVSede(vSedeTmp);
    return vSedeTmp;
  };

  const mActualziarCoordinarodes = (vAuxiliaresTmp) => {
    console.log(vAuxiliaresTmp);
    setVRegistrosAuxiliares(vAuxiliaresTmp);
    vActualizarEstado();
  };

  const mActualizarModeradores = (vModeradoresTmp) => {
    //console.log(vModeradoresTmp)
    setVRegistrosAuxiliares(vModeradoresTmp);
    //vActualizarEstado();
  };

  const mActualizarConsejeros = (vConsejerosTmp) => {
    //console.log(vModeradoresTmp)
    setVRegistrosAuxiliares(vConsejerosTmp);
    //vActualizarEstado();
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
    setvActualizarHome(Date.now());
    //setvKeySalas(Date.now());
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
        texto: Variables.v_MenuAdministrador.item1,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AssistantPhoto />,
        texto: Variables.v_MenuAdministrador.item2,
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
            setVRegistrosModeradores,
            setVIsCargandoModeradores
          );
          mSetvContenido(vContenido);
        },
      },
      {
        icon: <Icon.AccountBalance />,
        texto: Variables.v_MenuAdministrador.item3,
        mAccion: (vContenido) => {
          setVIsCargandoSalas(true);
          Gets.mGetSalas(
            setvSalasCargadas,
            setvKey,
            setVIsCargandoSalas,
            mSacarSede
            )
            mSetvContenido(vContenido);
        },
      },
      {
        icon: <Icon.Mail />,
        texto: Variables.v_MenuAdministrador.item4,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.Tune />,
        texto: Variables.v_MenuAdministrador.item5,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.People />,
        texto: Variables.v_MenuAdministrador.item6,
        mAccion: mSetvContenido,
      },
    ];
  };

  const mContenido = () => {
    switch (vContenido) {
      case Variables.v_MenuAdministrador.item1:
        return (
          <CDialogPerfilAdministrador
            setvAcctualizarEstado={mActualizarEstado}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
            vUsuario={vUsuario}
            mRefresaacarPantalla={mRefresaacarPantalla}
          />
        );
      case Variables.v_MenuAdministrador.item2:
        return (
          <CHome
            key={vKeySalas}
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
            vUsuario={vUsuario}
            vInstituciones={vInstituciones}
          />
        );
      case Variables.v_MenuAdministrador.item3:
        return (
          <CSalas
            key={vKey}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
            vSalasCargadas={vSalasCargadas}
            mCargarSalas={mCargarSalas}
            vSede={vSede}
            vIsCargandoSalas={vIsCargandoSalas}
            setVIsCargandoSalas={setVIsCargandoSalas}
            setvSalasCargadas={setvSalasCargadas}
            setvKeyS={setvKey}
          />
        );
      case Variables.v_MenuAdministrador.item4:
        return (
          <CRedactarCorreos
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
          />
        );
      case Variables.v_MenuAdministrador.item5:
        return (
          <CConfiguraciones
            vInstituciones={vInstituciones}
            setVInstituciones={setVInstituciones}
            vUrlWhatsapp={vUrlWhatsapp}
            vIsExisteManual={vIsExisteManual}
            vIsExistePlantilla={vIsExistePlantilla}
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
          />
        );
      case Variables.v_MenuAdministrador.item6:
        return (
          <>
            <CUsuarios
              {...props}
              vInstituciones={vInstituciones}
              setvAcctualizarEstado={mActualizarEstado}
              vRegistrosAuxiliares={vRegistrosAuxiliares}
              setVRegistrosAuxiliares={mActualziarCoordinarodes}
              mRefresaacarPantalla={mRefresaacarPantalla}
              vRegistrosModeradores={vRegistrosModeradores}
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
