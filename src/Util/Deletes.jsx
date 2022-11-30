import axios from "axios";
import * as Variables from "../Global/Variables";

export async function mEliminarAuxiliar(vRegistro) {
  
    await fetch(
      Variables.v_URL_API2 + "/api/usuarios/eliminar-Auxiliar/"+vRegistro.uid,
      {
        method: "DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  export async function mEliminarModeradorConsejero(vRegistro) {
  
    await fetch(
      Variables.v_URL_API2 + "/api/usuarios/eliminar-moderador/"+vRegistro.uid,
      {
        method: "DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }
  export async function mEliminarInstitucion(vRegistro) {
  
    await fetch(
      Variables.v_URL_API2 +
        "/api/universidades/eliminar-universidad/" +
        vRegistro._id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
  }