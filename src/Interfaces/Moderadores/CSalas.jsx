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
import * as Variables from "../../Global/Variables"

export default function CSalas(props) {

  const {setvFrame,
        setvNombre,
        setvArea,
        setvModalidad,
        setvFecha,
        setvUbicacion,
        setvSalon,
        setvTurno,
        setvNoponentes,
        setvUrl,
        asis} = props
  
  const [vSalas, setvSalas] = React.useState([]);

  React.useEffect(() => {
    Gets.mGetSalasPrueba(setvSalas);
  }, []);

  // vSalas.map((sala,index) =>
  //   console.log(vSalas)
  // );

  const elementos = vSalas.map((sala,index) =>
    <Fragment>
        <MBotonSala 
          idSala={vSalas[index]._id}
          nombreSala={vSalas[index].linea}
          areaSala={vSalas[index].area}
          modalidadSala={vSalas[index].modalidad}
          fechaSala={vSalas[index].fecha}
          ubicacionSala={vSalas[index].ubicacion}
          salonSala={vSalas[index].salon}
          turnoSala={vSalas[index].turno}
          nopontentesSala={vSalas[index].no_ponentes}
          urlSala={vSalas[index].url}

          setvFrame={setvFrame}
          setvNombre={setvNombre}
          setvArea={setvArea}
          setvModalidad={setvModalidad}
          setvFecha={setvFecha}
          setvUbicacion={setvUbicacion}
          setvSalon={setvSalon}
          setvTurno={setvTurno}
          setvNoponentes={setvNoponentes}
          setvUrl={setvUrl}
        />
    </Fragment>
  );

  return(
    <div className="contenedorPrincipalSalas">
      <h2 className="tituloSala">Mis salas</h2>
        {elementos} 

        <div align="right">
        <Button variant="contained" id="btnAsis" size="large"  onClick={()=>asis(Variables.v_MenuModeradores.item5)}>Lista de Asistencia</Button>
        </div>

    </div> 
  );
}
