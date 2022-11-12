import React from "react";

import CCRUDCoordinadores from "../../Componentes/Usuarios/CCRUDCoordinadores";
import CConsultaModeradoresYConsejeros from "../../Componentes/Usuarios/CConsultaModeradoresYConsejeros";

export default function CUsuarios(props) {
  const {
    mSetvFramePrincipal,
    vAltoNav,
    vAnchoNav,
    setvAcctualizarEstado,
    vRegistrosCoordinadores,
    setVRegistrosCoordinadores,
    mRefresaacarPantalla,
    vRegistrosModeradores,
    setVRegistrosModeradores,
  } = props;

  return (
    <div>
      <CCRUDCoordinadores
        setvAcctualizarEstado={setvAcctualizarEstado}
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}
        vRegistrosCoordinadores={vRegistrosCoordinadores}
        setVRegistrosCoordinadores={setVRegistrosCoordinadores}
        mRefresaacarPantalla={mRefresaacarPantalla}
      />
      <CConsultaModeradoresYConsejeros
        vRegistrosModeradores={vRegistrosModeradores}
        setVRegistrosModeradores={setVRegistrosModeradores}
        vAltoNav={vAltoNav}
        vAnchoNav={vAnchoNav}
        mSetvFramePrincipal={mSetvFramePrincipal}
        setvAcctualizarEstado={setvAcctualizarEstado}
        mRefresaacarPantalla={mRefresaacarPantalla}
      />
    </div>
  );
}
