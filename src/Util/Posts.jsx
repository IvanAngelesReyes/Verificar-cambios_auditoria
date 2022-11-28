import * as Variables from "../Global/Variables";
import * as Metodos from "../Global/Metodos"

//Login de administradores
export async function mLoginAdmin(vLogin){
  await fetch(
    Variables.v_URL_API2 + "/api/admin/agregar",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vLogin),
    }
  )
    .then(response => response.json())
    .then(data => {
      let vResponse = data
      console.log(vResponse)
      //Metodos.verificaRCoo(vResponse)
    });
}



//Login de auxiliares (antes coordinadores)
export async function mLoginAuxiliar(vLogin){
  await fetch(
    Variables.v_URL_API2 + "/api/auth/login/consejero",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vLogin),
    }
  )
    .then(response => response.json())
    .then(data => {
      let vResponse = data
      console.log(vResponse)
      //Metodos.verificaRCoo(vResponse)
    });
}

//Login de consejeros
export async function mLoginConsejero(vLogin){
  await fetch(
    Variables.v_URL_API2 + "/api/auth/login/coordinador",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vLogin),
    }
  )
  .then(response => response.json())
  .then(data => 
    { 
      let vResponse = data
      console.log(vResponse)
      //Metodos.verificaRM(vResponse)
    });
    
}

//Login de moderadores
export async function mLoginModerador(vLogin){
  await fetch(
    Variables.v_URL_API2 + "/api/auth/login",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vLogin),
    }
  )
  .then(response => response.json())
  .then(data => 
    { 
      let vResponse = data
      console.log(vResponse)
      Metodos.verificaRM(vResponse)
    });
}

export async function mAgregarModerador(vRegistroM,setvDatosRegistro){
  //console.log(vRegistroM)
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
    .then(data => setvDatosRegistro(data));
}

export async function mAgregarCoordinador(vRegistro) {

  await fetch(
    Variables.v_URL_API2 + "/api/usuarios/coordinador",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vRegistro),
    }
  )
    .then((response) => response.json())
    .then(console.log);
}

export async function mAgregarSalas(vSala) {

  await fetch(
    Variables.v_URL_API2 + "/api/salas/crear-salas",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vSala),
    }
  )
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

export function mEnviarCorreo(vTipoCorreo, vTo, passwd) {
  const formData = new FormData();

  switch (vTipoCorreo) {
    case "9":
      formData.append("vTipoCorreo", vTipoCorreo);
      formData.append("vTo", vTo);
      formData.append("passwd", passwd);
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

export async function mActualizarRolModerador(vRegistroM){
  //console.log(vRegistroM)
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
    .then(console.log);
}

export async function mGuardarManual(vManual, mObtenerProgreso) {
  const formData = new FormData();
  formData.append("manual", vManual);

  const streamProcessor = progressReader(console.log, mObtenerProgreso);

  await fetch(Variables.v_URL_API + "/backend/Manual/CGuardar.php", {
    method: "POST",
    body: formData,
  })
    .then(streamProcessor)
    .then((response) => response.text())
    .then(console.log);
}

export async function mCrearPlantilla(vPlantilla) {
  const formData = new FormData();
  formData.append("plantilla", vPlantilla);


  await fetch(
    Variables.v_URL_API + "/backend/Certificado/CrearVisualizador.php",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then(console.log);
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
              mObtenerProgreso(loaded)
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