import * as Variables from "../Global/Variables";
import CModerador from '../Interfaces/Moderadores/CModerador'

export async function mLoginCoordinador(vLogin){

  let respuestacordi

  await fetch(
    Variables.v_URL_API2 + "/api/auth/login/coordinadores",
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(vLogin),
    }
  )
    .then((response) => response.json())
    .then(data => {
      respuestacordi = data.msg

      if(respuestacordi === "Usuario / Contraserña incorrectos"){
        alert("El usuario o contraseña son incorrectos");
      }

    })

}

export async function mLoginModerador(vLogin){

  let respuesta
  let consejero
  let estado

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
    .then((response) => response.json())
    .then(data => {
      respuesta = data.msg

      if(respuesta === 'login ok'){
        estado = data.vUsuario.estado
        if(estado===true){
          consejero = data.vUsuario.consejero
          alert("Inicio de sesion exitoso como moderador");
          <CModerador/>
          if(consejero === true){
            alert("Inicio de sesion exitoso como consejero");
          }
        }else{
          alert("Debe esperar que un coordinador apruebe su solicitud")
        }
      }else{
        alert("El usuario o contraseña son incorrectos");
      }      
    })
}

export async function mAgregarModerador(vRegistroM){
  console.log(vRegistroM)
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
    .then(data => {console.log(data)});
    //falta poner un mensaje de error o exito
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