/*
SmartSoft
Componente: CDesktop
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 3
Componentes relacionados: 
*/

import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";

import * as Variables from "../../Global/Variables";

import * as Mui from "@mui/material";

export default function Desktop(props) {
  const {
    mSetvFramePrincipal,
    vAltoNav,
    vAnchoNav,
    vItems_menu,
    vNombrePersona,
    vContenido,
  } = props;


  const [vSeleccionarItemMenu, mSetvSeleccionarItemMenu] = React.useState(2);
  const handleListItemClick = (vContenido: String, mAccion, index: number) => {
    mAccion(vContenido);
    mSetvSeleccionarItemMenu(index);
  };

  const mMostraOpciones = () => {
    var vItems_menuTmp =
      vItems_menu !== null && vItems_menu !== undefined
        ? vItems_menu
        : [
            <Mui.Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <CategoryIcon fontSize="small" />
              <Mui.Typography variant="body1" component="p">
                Item 1
              </Mui.Typography>
            </Mui.Stack>,
            <Mui.Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <CategoryIcon fontSize="small" />
              <Mui.Typography variant="body1" component="p">
                Item 2
              </Mui.Typography>
            </Mui.Stack>,
          ];
    var menu = vItems_menuTmp.map((item, index) => {
      return (
        <Mui.ListItemButton
          selected={vSeleccionarItemMenu === index + 1}
          onClick={(event) =>
            handleListItemClick(item.texto, item.mAccion, index + 1)
          }
        >
          <Mui.ListItemIcon className="iconos_Menu">
            {item.icon}
          </Mui.ListItemIcon>
          <Mui.ListItemText size="10px" primary={item.texto} />
        </Mui.ListItemButton>
      );
    });
    return menu;
  };

  return (
    <Mui.Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0.5}
      sx={{ height: "100%", overflow: "hidden" }}
    >
      <Mui.Paper
        sx={{
          p: "5px",
          width: "280px",
          minWidth: "280px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          height: "100%",
          background: "#304A6E",
          color: "#fff",
        }}
      >
        {/*<Mui.Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0.5}
          sx={{ height: "150px", marginBottom: "10px" }}
        >
          <AccountCircleIcon sx={{ fontSize: 100 }} />
          <Mui.Typography variant="body2" component="p">
            {vNombrePersona !== null && vNombrePersona !== undefined
              ? vNombrePersona
              : "Nombre y apellidos "}
          </Mui.Typography>
        </Mui.Stack> height: vAltoNav - 150 */}
        <Mui.Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          sx={{ height: vAltoNav - 0 }}
        >
          <Mui.List component="nav" aria-label="main mailbox folders">
            {mMostraOpciones()}
          </Mui.List>
        </Mui.Stack>
        <Mui.Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0.5}
          sx={{ height: "auto", cursor: "pointer" }}
          onClick={() => mSetvFramePrincipal(Variables.v_FRFAMES.login)}
        >
          <Mui.Typography variant="body1" component="p">
            {Variables.v_TEXTOS.cerrar_sesion}
          </Mui.Typography>
        </Mui.Stack>
      </Mui.Paper>
      <Mui.Paper
        elevation={0}
        sx={{background: "#f4f6f9", height: "100%",width: "100%", p: "10px", overflow: "hidden auto" }}
      >
        {vContenido}
      </Mui.Paper>
    </Mui.Stack>
  );
}
