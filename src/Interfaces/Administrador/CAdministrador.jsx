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

export default function CAdministrador(props) {
  const { mSetvFramePrincipal, vAltoNav, vAnchoNav, vUsuario } = props;
  const vResAltoNav = 0;

  const [vContenido, mSetvContenido] = React.useState(
    Variables.v_MenuAdministrador.item2
  );
  const [vSalasCargadas, setvSalasCargadas] = React.useState([]);
  const [vRegistrosAuxiliares, setVRegistrosAuxiliares] = React.useState([]);
  const [vRegistrosModeradores, setVRegistrosModeradores] = React.useState([]);
  const [vInstituciones, setVInstituciones] = React.useState([]);
  const [vIsExisteManual, setVIsExisteManual] = React.useState(false);
  const [vIsExistePlantilla, setVIsExistePlantilla] = React.useState(false);
  const [vUrlWhatsapp, setVUrlWhatsapp] = React.useState("");

  //Varaibles para las esperas de peticiones:
  const [vIsCargandoSalas, setVIsCargandoSalas] = React.useState(true);

  React.useEffect(() => {
    Gets.mGetAuxiliares(setVRegistrosAuxiliares);
    Gets.mGetModeradores(setVRegistrosModeradores);
    Gets.mGetSalas(setvSalasCargadas, setvKeySalas, setVIsCargandoSalas);
    Gets.mGetUniversidades(setVInstituciones);
    Gets.mGetManualFile(setVIsExisteManual);
    Gets.mGetCertificadoFile(setVIsExistePlantilla);
    Gets.mGetURLWhatsapp(setVUrlWhatsapp);
    //Gets.mGetUrls(setVIsExisteManual,setVUrlWhatsapp);
  }, []);

  const [vKey, setvKey] = React.useState(Date.now());
  const [vKeySalas, setvKeySalas] = React.useState(Date.now());
  const [vActualizarEstado, setvAcctualizarEstado] = React.useState();

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
        texto: Variables.v_MenuAdministrador.item1,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AssistantPhoto />,
        texto: Variables.v_MenuAdministrador.item2,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AccountBalance />,
        texto: Variables.v_MenuAdministrador.item3,
        mAccion: mSetvContenido,
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
          //onClick = {()=>
          <CDialogPerfilAdministrador
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
            vInstituciones={vInstituciones}
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
          //vRegistrosModeradores.vConsultaDataModerador = moderadores;
          return (
            <>
              <CUsuarios
                {...props}
                vInstituciones={vInstituciones}
                setvAcctualizarEstado={mActualizarEstado}
                vRegistrosAuxiliares={vRegistrosAuxiliares}
                setVRegistrosAuxiliares={mActualziarCoordinarodes}
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
