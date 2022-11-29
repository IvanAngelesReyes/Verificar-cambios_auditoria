import axios from "axios";
import * as Variables from "../Global/Variables";

export async function mModificarCoordinador(vRegistro) {

    await fetch(
      Variables.v_URL_API2 + "/api/usuarios/actualizar-coordinador/"+vRegistro.uid,
      {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  export async function mActualizarModerador(vRegistro) {
      await fetch(
    Variables.v_URL_API2 + "/api/usuarios/ /actualizar-moderador-coordinador/:id"+vRegistro.uid,
    {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  export async function mActualizarRolModerador(vRegistro) {
    await fetch(
  Variables.v_URL_API2 + "/api/usuarios/actualizar-moderador-coordinador/:id"+vRegistro.uid,
  {
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vRegistro),
    }
  )
    .then((response) => response.json())
    .then(console.log);
}

export async function mActualizarConsejero(vRegistro) {
  await fetch(
Variables.v_URL_API2 + "/api/consejero/actualizar-consejero/:id"+vRegistro.uid,
{
    method: "PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(vRegistro),
  }
)
  .then((response) => response.json())
  .then(console.log);
}

export async function mActualizarConsejeroInstitucion(vRegistro) {
await fetch(
Variables.v_URL_API2 + "/api/auxiliares/actualizar-consejero-institucion/:id/consejero/:idm?institucion="+vRegistro.uid,
{
  method: "PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(vRegistro),
}
)
.then((response) => response.json())
.then(console.log);
}

export async function mActualizarModeradorInstitucion(vRegistro) {
await fetch(
Variables.v_URL_API2 + "/api/auxiliares/actualizar-moderador-institucion/:id/moderador/:idm?institucion="+vRegistro.uid,
{
  method: "PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(vRegistro),
}
)
.then((response) => response.json())
.then(console.log);
}

  export async function mModifcarSalas(vSala) {

    await fetch(
      Variables.v_URL_API2 + "/api/salas/actualizar-sala/"+vSala.id,
      {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(vSala),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  export async function mModifcaUrlWhatsapp(vUrl) {

    await fetch(
      Variables.v_URL_API2 + "/api/whats/actualizar-whats-url/:0",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vUrl),
      }
    )
      .then((response) => response.json())
      .then();
  }
  export async function mModifcaUrlManual(vUrl) {

    await fetch(Variables.v_URL_API2 + "/api/manual/actualizar-manual-url/:0", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vUrl),
    })
      .then((response) => response.json())
      .then(console.log);
}
  
export async function mModificarInstitucion(vRegistro) {
  await fetch(
    Variables.v_URL_API2 +
      "/api/universidades/actualizar-universidades/" +
      vRegistro._id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vRegistro),
    }
  )
    .then((response) => response.json())
}