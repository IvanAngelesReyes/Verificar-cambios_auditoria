import React, { Fragment } from 'react'
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
        />
    </Fragment>
  );

  return (
    <div className="contenedorPrincipalSalas">

      <h2 className="tituloSala">Mis salas</h2>

      <button onClick={()=>setvFrame("detallesalas")}>Detalles</button>

      {elementos}

    </div>
  )
}
