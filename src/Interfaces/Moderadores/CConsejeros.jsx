import * as React from 'react';
import * as Gets from "../../Util/Gets";
import * as Deletes from "../../Util/Deletes";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './CConsejeros.css';
import Stack from '@mui/material/Stack';
import * as Mui from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import * as Variables from "../../Global/Variables";
import TarjetaCuadroConsejeros from "../../Componentes/TarjetasPerfiles/Cuadros/CConsejero";
import TarjetaListaConsejeros from "../../Componentes/TarjetasPerfiles/Listas/CConsejero";
import BotonCuadroLista from "../../Componentes/Botones/CBotonCuadroLista";

export default function CConsejeros() {
  const [vModeradores, setvModeradores] = React.useState([]);

  React.useEffect(() => {
    Gets.mGetModeradoresSinAceptar(setvModeradores);
  }, []);

  async function mEliminarModeradorConsejero(vRegistro) {
  
    await fetch(
      Variables.v_URL_API2 + "/api/usuarios/actualizar-moderador/"+vRegistro.uid,
      {
        method: 'PUT',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  vModeradores.map((moderador, index) => {
    console.log(vModeradores)
  })
  const elementos = () => {
    return vModeradores.map((moderador, index) => {
      return <div className="contenedorPrincipalNuevosModeradores">
         <h1 className="tituloSala">Solicitudes de moderadores:</h1>
        <div className="divContenedorInfoConsejeros">
          <div className="div1">
          <p id="tituloModeradores"><b>Nombre: </b> {vModeradores[index].nombre}</p>
          <p id="tituloModeradores"><b>Apellido Paterno: </b>{vModeradores[index].apellido_paterno}</p>
          <p id="tituloModeradores"><b>Apellido Materno: </b>{vModeradores[index].apellido_materno}</p>
          <p id="tituloModeradores"><b>Correo: </b>{vModeradores[index].correo}</p>
          <p id="tituloModeradores"><b>Institución: </b>{vModeradores[index].institucion}</p>
          <p id="tituloModeradores"><b>Area de interés 1: </b>{vModeradores[index].area_interes_1}</p>
          <p id="tituloModeradores"><b>Area de interés 2: </b>{vModeradores[index].area_interes_2}</p>
            <Button variant="contained" onClick={()=>mEliminarModeradorConsejero()}  startIcon={<DeleteIcon />}>Rechazar</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Aceptar</Button>
          </div>
        </div>
      </div>
    }
    );
  }
  return (
    <>
      {elementos()}
    </>
  );
}