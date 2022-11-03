import axios from "axios";
import * as Variables from "../Global/Variables";

export async function mGetCoordinadores(setVRegistrosCoordinadores) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/usuarios/obtener-coordinadores",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    console.log(vResponse);
    setVRegistrosCoordinadores(vResponse);
  });
}

export async function mGetInfoCorreos(vTipo, setvAsunto, setvContenido) {
  let reqOptions = {
    url:
      Variables.v_URL_API +
      "/backend/EnviarCorreos/CObtenerConfiguracion.php?tipo=" +
      vTipo,
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    let vAsunto = vResponse.info.asunto;
    let vContenido = vResponse.info.contenido;
    setvAsunto(vAsunto);
    setvContenido(vContenido);
  });
}

export async function mGetInfoCorreos1(vTipo, setvCorreo) {
  let reqOptions = {
    url:
      Variables.v_URL_API +
      "/backend/EnviarCorreos/CObtenerConfiguracion.php?tipo=" +
      vTipo,
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    let vAsunto = vResponse.info.asunto;
    let vContenido = vResponse.info.contenido;
    setvCorreo({ asunto: vAsunto, cuerpo: vContenido });
  });
}

export async function mGetModeradores(setVRegistrosModeradores) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/usuarios/obtener-moderador-aceptado",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    console.log(vResponse);
    setVRegistrosModeradores(vResponse);
  });
}
export async function mGetSalas(setVSalas,setvKeySalas) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/salas/obtener-salas",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    //console.log(vResponse);
    setVSalas(vResponse);
    setvKeySalas(Date.now())
  });
}

export async function mGetAreaInteres(setvArea) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/area/area-materia",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    console.log(vResponse);
    setvArea(vResponse);
  });
}

export async function mGetModeradores2(setVRegistrosModeradores) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/usuarios /obtener-moderador-noaceptado",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    console.log(vResponse);
    setVRegistrosModeradores(vResponse);
  });
}
