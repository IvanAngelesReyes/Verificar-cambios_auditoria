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
    setVRegistrosModeradores(vResponse);
  });
}

export async function mGetSalas(setVSalas, setvKeySalas) {
  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/salas/obtener-salas",
    method: "GET",
    mode: "corps",
  };

  await axios.request(reqOptions).then(function (response) {
    if (response.data.length > 0) {
      let vResponse = response.data;
      setVSalas(vResponse);
    } else {
      setVSalas([]);
    }
    setvKeySalas(Date.now());
  });
}

export async function mGetAreaInteres(setvAreas) {

  //var areas = [];

  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/area/area-materia",
    method: "GET"
  };

  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;

    //for(var i=0; i < vResponse.length;i++){
    //  areas.push(vResponse[i].area_interes)
    //}
    setvAreas(vResponse);
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
    setVRegistrosModeradores(vResponse);
  });
}

export async function mGetUniversidades(setvUniversidades) {

  let reqOptions = {
    url: Variables.v_URL_API2 + "/api/universidades/listar-universidades",
    method: "GET"
  }
  await axios.request(reqOptions).then(function (response) {
    let vResponse = response.data;
    setvUniversidades(vResponse);
});
}

export async function mGetManualFile(setVIsExisteManual) {
    let reqOptions = {
      url: Variables.v_URL_API + "/backend/Manual/CExiste.php",
      method: "GET",
      mode: "corps",
    }

    await axios.request(reqOptions).then(function (vResponse) {
      console.log(vResponse.info);
      setVIsExisteManual(vResponse.info==="false"?false:true);
    }
  )
}
