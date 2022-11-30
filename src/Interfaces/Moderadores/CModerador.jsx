/*
SmartSoft
Componente: MModerador
Fecha de creacion: 24/10/2022, Autorizó:Ricardo Adrian Alfaro García, Revisó: 

Modificaciones:
    Fecha               Folio

Descripcion:
Barra de menu lateral para los coordinadores

Numero de metodos: 3
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";

import * as Variables from "../../Global/Variables";

import CSalas from "./CSalas";
import CDesktop from "../../Componentes/Desktop/CDesktop";
import CMiPerfil from "../Moderadores/CMiPerfil";
import CHome_Moderadores from "./CHome_Moderadores";
import ConjuntoSalas from "./ConjuntoSalas";
import Consejeros from "./CConsejeros";
import CDialogPerfilModerador from "../../Componentes/Dialogs/CDialogPerfilModerador";


export default function CModerador(props) {
  const { mSetvFramePrincipal, vAltoNav, vAnchoNav, vModeradores,vUsuario } = props;
  const vResAltoNav = 0;

  const [vContenido, mSetvContenido] = React.useState(
    Variables.v_MenuModeradores.item2
  );

  const mMenuItems = () => {
    return [
      {
        icon: <Icon.AccountBox />,
        texto: Variables.v_MenuModeradores.item1,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AssignmentInd />,
        texto: Variables.v_MenuModeradores.item2,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.AccountBalance />,
        texto: Variables.v_MenuModeradores.item3,
        mAccion: mSetvContenido,
      },
      {
        icon: <Icon.People />,
        texto: Variables.v_MenuModeradores.item4,
        mAccion: mSetvContenido,
      },
    ];
  };

  const mContenido = () => {
    switch (vContenido) {
      case Variables.v_MenuModeradores.item1:
        return (
          <CDialogPerfilModerador
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}    
      />
        );

      case Variables.v_MenuModeradores.item2:
        return (
          <CHome_Moderadores
            vAltoNav={vAltoNav}
            vAnchoNav={vAnchoNav}
            mSetvFramePrincipal={mSetvFramePrincipal}
          />
        );
      case Variables.v_MenuModeradores.item3:
        return <ConjuntoSalas
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}
      />

      case Variables.v_MenuModeradores.item4:
        return <Consejeros
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}
      />
<<<<<<< HEAD

=======
      
>>>>>>> 9cf5b46c750e359b90fe43989450f2ab345c5f19
      default:
        <p>Esto no se debe de ver</p>;
        break;
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
        vNombrePersona="Leandro Gómez Flores"
        vContenido={mContenido()}
      />
    </Mui.Paper>
  );
}