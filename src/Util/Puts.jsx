import axios from "axios";
import * as Variables from "../Global/Variables";

export async function mModificarAuxiliar(vRegistro) {

    await fetch(
      Variables.v_URL_API2 +
        "/api/auxiliares/actualizar-auxiliar/" +
        vRegistro.uid,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vRegistro),
      }
    )
      .then((response) => response.json())
      .then(console.log);
  }

  export async function mActualizarModerador(vRegistro) {
      await fetch(
    Variables.v_URL_API2 + "/api/usuarios/ /actualizar-moderador-Auxiliar/:id"+vRegistro.uid,
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
  Variables.v_URL_API2 + "/api/usuarios/actualizar-moderador-Auxiliar/:id"+vRegistro.uid,
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
      Variables.v_URL_API2 + "/api/salas/actualizar-sala/"+vSala._id,
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

export async function mRPsswdModeradores(vCorreo) {
  await fetch(
    Variables.v_URL_API2 + "/api/auth/reset-password",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vCorreo),
    }
  )
    .then((response) => response.json())
    // .then((data) =>{
    //   console.log(data)
    // })
}