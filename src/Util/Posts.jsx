import * as Variables from "../Global/Variables";
import * as Metodos from "../Global/Metodos";

export async function rlogins(vLogin) {
  let rlogins = "nada";
  rlogins = await mLogins(vLogin);
  console.log("RLOGINS ---> " + rlogins);
  return rlogins;
}

//logins
export async function mLogins(vLogin, mSeleccionarFrame) {
  await mLoginModerador(vLogin).then((respuestam) => {
    if ( respuestam.r === "modencontradook" || respuestam.r === "modconencontrado") {
      console.log("ENCONTRADO EN MODERADORES TODO OK, DETENER BUSQUEDA");
      mSeleccionarFrame(respuestam);
    } else {
      if (respuestam.r === "modnoautorizado" || respuestam.r === "moderrorcontra") {
        console.log("ENCONTRADO EN MODERADORES CON ERRORES, DETENER BUSQUEDA---");

        if(respuestam.r === "moderrorcontra"){
          alert("El usuario o contraseña son incorrectos (contra incorrecta moderador)")
        }

      } else {
        console.log("NO ENCONTRADO EN MODERADORES, CONTINUAR BUSQUEDA");

        //COMIENZA LA BUSQUEDA EN CONSEJEROS
        mLoginConsejero(vLogin).then((respuestac) => {
          if (respuestac.r === "conencontradook") {
            console.log("ENCONTRADO EN CONSEJEROS TODO OK, DETENER BUSQUEDA");
            respuestac.r = "ventanaconsejero";
            mSeleccionarFrame(respuestac);
          } else {
            if (respuestac.r === "connoautorizado" || respuestac.r === "conerrorcontra") {
              console.log("ENCONTRADO EN CONSEJEROS CON ERRORES, DETENER BUSQUEDA");

              if(respuestac.r === "conerrorcontra"){
                alert("El usuario o contraseña son incorrectos (contra incorrecta consejero)")
              }

            }else{
              console.log("NO ENCONTRADO EN CONSEJEROS, CONTINUAR BUSQUEDA---");

              //COMIENZA LA BUSQUEDA EN AUXILIARES
              mLoginAuxiliar(vLogin).then((respuestaax) => {
                if (respuestaax.r === "auxencontradook") {
                  console.log("ENCONTRADO EN AUXILIARES TODO OK, DETENER BUSQUEDA");
                  respuestaax.r = "ventanaauxiliar";
                  mSeleccionarFrame(respuestaax);
                } else {
                  if (respuestaax.r === "auxnoautorizado" || respuestaax.r === "auxerrorcontra") {
                    console.log("ENCONTRADO EN AUXILIARES CON ERRORES, DETENER BUSQUEDA");
                    
                    if(respuestaax.r === "auxerrorcontra"){
                      alert("El usuario o contraseña son incorrectos (contra incorrecta auxiliar)")
                    }
                    
                  }else{
                    console.log("NO ENCONTRADO EN AUXILIARES, CONTINUAR BUSQUEDA---");

                    mLoginAdmin(vLogin).then((respuestaad) => {
                      if (respuestaad.r === "adminencontradook") {
                        console.log("ENCONTRADO EN ADMINS, DETENER BUSQUEDA");
                        respuestaad.r = "ventanaadmin";
                        mSeleccionarFrame(respuestaad);
                      }
                    });
                  }
                }
              });
            }
          }
        });
     } }
    
  });
}

//Login de administradores
export async function mLoginAdmin(vLogin) {
  let r = { usuario: "", r: "" };
  await fetch(Variables.v_URL_API2 + "/api/auth/login/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vLogin),
  })
    .then((response) => response.json())
    .then((data) => {
      let vResponse = data;
      console.log(vResponse);

      r.r = Metodos.verificaRAdmin(vResponse);

      console.log("RAdmin: " + r.r);
      if (r.r === "adminencontrado") {
        r.usuario = vResponse.vAdmin;
      }
    });
  return r;
}

//Login de auxiliares (antes coordinadores)
export async function mLoginAuxiliar(vLogin) {
  let r = { usuario: "", r: "" };
  await fetch(Variables.v_URL_API2 + "/api/auth/login/coordinador", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vLogin),
  })
    .then((response) => response.json())
    .then((data) => {
      let vResponse = data;
      console.log(vResponse);
      //Metodos.verificaRCoo(vResponse)

      r.r = Metodos.verificaRCoo(vResponse);

      console.log("RAuxiliar: " + r);
      if (r.r === "auxiliarencontrado") {
        r.usuario = vResponse.vAuxiliar;
      }
    });
  return r;
}

//Login de consejeros
export async function mLoginConsejero(vLogin) {
  let r = { usuario: "", r: "" };
  await fetch(Variables.v_URL_API2 + "/api/auth/login/consejero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vLogin),
  })
    .then((response) => response.json())
    .then((data) => {
      let vResponse = data;
      console.log(vResponse);

      r.r = Metodos.verificaRC(vResponse);

      console.log("RConsejero: " + r);

      if (r.r === "consejeroencontrado") {
        r.usuario = vResponse.vConsejero;
      }
    });
  return r;
}

//Login de moderadores
export async function mLoginModerador(vLogin) {
  let r = { usuario: "", r: "" };
  await fetch(Variables.v_URL_API2 + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vLogin),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let vResponse = data;
      //Metodos.verificaResMod(vResponse);
      //console.log("::::Resouesta del JSN: " + vResponse.msg)

      r.r = Metodos.verificaResMod(vResponse);

      console.log("RModerador: " + r);
      if (r.r === "noautorizado") {
      } else {
        if (r.r === "moderadorencontrado") {
          r.usuario = vResponse.vModerador;
        }
      }

      // if(Metodos.verificaResMod(vResponse, usuario) === "moderadornoencontrado"){
      //   //return "moderadornoencontrado"
      // }
    });
  return r;
}

export async function mAgregarConsejeroEnAuxiliar(vRegistro) {
  await fetch(Variables.v_URL_API2 + "/api/auxiliares/crear-auxiliar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vRegistro),
  })
    .then((response) => response.json())
    .then(console.log);
}

export async function mAgregarModerador(vRegistroM, setvDatosRegistro) {
  await fetch(
    Variables.v_URL_API2 + "/api/usuarios",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vRegistroM),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let vResponse = data;
      Metodos.verificaRRM(vResponse, vRegistroM.correo);
      console.log(data)
      //setvDatosRegistro(data)
    });
}

export async function mAgregarModeradorEnAuxiliarInstitucion(vRegistro) {
  await fetch(
    Variables.v_URL_API2 +
      "/api/auxiliares/registrar-moderador-x-institucion/id?institucion=",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vRegistro),
    }
  )
    .then((response) => response.json())
    .then(console.log);
}

export async function mAgregarAuxiliar(vRegistro) {
  await fetch(Variables.v_URL_API2 + "/api/usuarios/Auxiliar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vRegistro),
  })
    .then((response) => response.json())
    .then(console.log);
}

export async function mAgregarSalas(vSala) {
  await fetch(Variables.v_URL_API2 + "/api/salas/crear-salas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vSala),
  })
    .then((response) => response.json())
    .then(console.log);
}

export async function mGuardarCorreo(vTipo, vAsunto, vCuerpo) {
  const formData = new FormData();
  console.log(vCuerpo);

  formData.append("tipo", vTipo);
  formData.append("asunto", vAsunto);
  formData.append("cuerpo", vCuerpo);

  await fetch(
    Variables.v_URL_API + "/backend/EnviarCorreos/CGuardarConfiguracion.php",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.json())
    .then(console.log);
}

// Parametros
// tipo : 1
// correo 


export function mEnviarCorreo(vTipoCorreo, vTo, passwd) {
  const formData = new FormData();

  switch (vTipoCorreo) {
    case "9":
    case "2":
      formData.append("vTipoCorreo", vTipoCorreo);
      formData.append("vTo", vTo);
      formData.append("vPassword", passwd);
      break;

    default:
      formData.append("vTipoCorreo", vTipoCorreo);
      formData.append("vTo", vTo);
      break;
  }
  console.log("Correo enviado");
  fetch(Variables.v_URL_API + "/backend/EnviarCorreos/CCorreos.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => console.log(response))
    .then(console.log);
}

export async function mActualizarRolModerador(vRegistroM) {
  //console.log(vRegistroM)
  await fetch(Variables.v_URL_API2 + "/api/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vRegistroM),
  })
    .then((response) => response.json())
    .then(console.log);
}

export async function mGuardarManual(vManual, mObtenerProgreso) {
  const formData = new FormData();
  formData.append("manual", vManual);

  //const streamProcessor = progressReader(console.log, mObtenerProgreso);

  await fetch(Variables.v_URL_API + "/backend/Manual/CGuardar.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then();
}

export async function mGuardarPlantilla(vPlantilla) {
  const formData = new FormData();
  formData.append("plantilla", vPlantilla);

  await fetch(
    Variables.v_URL_API + "/backend/Certificado/CGuardarCertificado.php",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then(console.log);
}
export async function mGuardarPlantillaTmp(setVPantilla, vPlantilla) {
  const formData = new FormData();
  formData.append("plantilla", vPlantilla);

  await fetch(Variables.v_URL_API + "/backend/Certificado/CGuardarTmp.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((r) => setVPantilla({ url: r.nombre, file: vPlantilla }));
}

function progressReader(onProgress, mObtenerProgreso) {
  // 1
  return (response) => {
    // 2
    if (!response.body) return response;

    let loaded = 0;
    const contentLength = response.headers.get("content-length"); // 3
    const total = !contentLength ? -1 : parseInt(contentLength, 10);

    const readable = new ReadableStream({
      start(controller) {
        const reader = response.body.getReader(); // 4
        read(); // 5

        function read() {
          return reader
            .read() // 6
            .then(({ done, value }) => {
              console.log(done);
              console.log(value);
              if (done) return controller.close(); // 7
              loaded += value.byteLength;
              mObtenerProgreso(loaded);
              onProgress({ loaded, total }); // 8
              controller.enqueue(value);
              return read(); // 9
            })
            .catch((error) => {
              console.error(error);
              controller.error(error);
            });
        }
      },
    });

    return new Response(readable); // 10
  };
}

export async function mCrearInstitucion(vRegistro, mAdd) {
  await fetch(
    Variables.v_URL_API2 + "/api/universidades/agregar-universidades",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vRegistro),
    }
  )
    .then((response) => response.json())
    .then(mAdd);
}

export async function mAgregarModeradorEspontaneo(vRegistroM, mMetodo) {
  console.log(vRegistroM);
  await fetch(Variables.v_URL_API2 + "/api/admin/espontaneo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vRegistroM),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mMetodo(data.vUsuario);
    });
  //.then((response) => response.status)
}

//Buscar Usuario para recuperar contraseña
export async function mBuscarURPswd(vLogin, mSeleccionarURecuperaPswd) {
  await mLoginModerador(vLogin).then((respuestam) => {
    if ( respuestam.r === "modencontradook" || respuestam.r === "modconencontrado") {
      console.log("ENCONTRADO EN MODERADORES TODO OK, DETENER BUSQUEDA");
      //mSeleccionarFrame(respuestam);
    } else {
      if (respuestam.r === "modnoautorizado" || respuestam.r === "moderrorcontra") {
        console.log("ENCONTRADO EN MODERADORES CON ERRORES, DETENER BUSQUEDA---");

        if(respuestam.r === "moderrorcontra"){

          console.log("El usuario o contraseña son incorrectos (contra incorrecta moderador)")
          mSeleccionarURecuperaPswd(respuestam)
        }

      } else {
        console.log("NO ENCONTRADO EN MODERADORES, CONTINUAR BUSQUEDA");

        //COMIENZA LA BUSQUEDA EN CONSEJEROS
        mLoginConsejero(vLogin).then((respuestac) => {
          if (respuestac.r === "conencontradook") {
            console.log("ENCONTRADO EN CONSEJEROS TODO OK, DETENER BUSQUEDA");
            respuestac.r = "ventanaconsejero";
            //mSeleccionarFrame(respuestac);
          } else {
            if (respuestac.r === "connoautorizado" || respuestac.r === "conerrorcontra") {
              console.log("ENCONTRADO EN CONSEJEROS CON ERRORES, DETENER BUSQUEDA");

              if(respuestac.r === "conerrorcontra"){
                console.log("El usuario o contraseña son incorrectos (contra incorrecta consejero)")
                mSeleccionarURecuperaPswd(respuestac)
              }

            }else{
              console.log("NO ENCONTRADO EN CONSEJEROS, CONTINUAR BUSQUEDA---");

              //COMIENZA LA BUSQUEDA EN AUXILIARES
              mLoginAuxiliar(vLogin).then((respuestaax) => {
                if (respuestaax.r === "auxencontradook") {
                  console.log("ENCONTRADO EN AUXILIARES TODO OK, DETENER BUSQUEDA");
                  respuestaax.r = "ventanaauxiliar";
                  //mSeleccionarFrame(respuestaax);
                } else {
                  if (respuestaax.r === "auxnoautorizado" || respuestaax.r === "auxerrorcontra") {
                    console.log("ENCONTRADO EN AUXILIARES CON ERRORES, DETENER BUSQUEDA");
                    
                    if(respuestaax.r === "auxerrorcontra"){
                      console.log("El usuario o contraseña son incorrectos (contra incorrecta auxiliar)")
                      mSeleccionarURecuperaPswd(respuestaax)
                    }
                    
                  }else{
                    console.log("NO ENCONTRADO EN AUXILIARES, CONTINUAR BUSQUEDA---");

                    mLoginAdmin(vLogin).then((respuestaad) => {
                      if (respuestaad.r === "adminencontradook") {
                        console.log("ENCONTRADO EN ADMINS, DETENER BUSQUEDA");
                        respuestaad.r = "ventanaadmin";
                        //mSeleccionarFrame(respuestaad);
                        mSeleccionarURecuperaPswd(respuestaad)
                      }
                    });
                  }
                }
              });
            }
          }
        });
     } }
    
  });
}
