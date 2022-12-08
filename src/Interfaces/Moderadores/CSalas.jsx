/*
SmartSoft
Componente: CSalas
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Componente que muestra las salas de cada usuario

Numero de metodos: 1
Componentes relacionados: 
*/

import React, { Fragment } from 'react'
import Button from "@mui/material/Button";
import CAsis from "./CAsistencia"
import './CSalas.css';
import MBotonSala from '../../Componentes/Botones/MBotonSala.jsx'
import * as Gets from "../../Util/Gets";

export default function CSalas(props) {

  const {setvFrame} = props
  const [vSalas, setvSalas] = React.useState([]);

  React.useEffect(() => {
    Gets.mGetSalas(setvSalas);
  }, []);

  const elementos = vSalas.map((sala,index) =>
    <Fragment>
        <MBotonSala 
          idSala={vSalas[index]._id}
          nombreSala={vSalas[index].linea}
          areaSala={vSalas[index].area}
          modalidadSala={vSalas[index].modalidad}
          fechaSala={vSalas[index].fecha}
          nopontentesSala={vSalas[index].no_ponentes}
          setvFrame={setvFrame}
        />
    </Fragment>
  );

  return(
    <div className="contenedorPrincipalSalas">
      <h2 className="tituloSala">Mis salas</h2>
        {elementos} 

        <div align="right">
        <Button variant="contained" id="btnAsis" size="large"  onClick={CAsis}>Lista de Asistencia</Button>
        </div>

    </div> 
  );
}
