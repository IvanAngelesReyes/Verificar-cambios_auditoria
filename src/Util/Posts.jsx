import * as Variables from "../Global/Variables";
//import { useState } from 'react';

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
      console.log("La respuesta del login de coordinadores fue: "+data.msg)
      respuestacordi = data.msg
    })

    if(respuestacordi === "Hable con el administrador"){
      alert("Hable con el administrador");
    }else{
      if(respuestacordi === "login ok"){
        /*Abrir la pagina de coordinadores*/
      }
    }

}

export async function mLoginModerador(vLogin,){

  let respuesta
  let usuario
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
      //console.log(data)
      alert(data.msg)
      respuesta = data.msg
      usuario = data.vUsuario.nombre
      consejero = data.vUsuario.consejero
      estado = data.vUsuario.estado

      /*if(usuario==="Leandro"){
        mDatDatos(data.vUsuario)
      }*/
    })

    if(respuesta === "login ok"){
      if(estado === true){
        alert("Inicio de sesion exitoso como moderador");
        //mDatDatos(usuario)
        if(consejero === true){
          alert("Ingreso como consejero")
          //PONER AQUI VENTANA DE MODERADOR
          //{()=>setvFrame("registro")}
        }
      }else{
        alert("Debe esperar confirmacion para que un coordinador le de permiso de ingresar")
      }
    }else{
      //if(respuesta === "Usuario / Contraserña incorrectos"){
        alert("El usuario o la contraseña son incorrectos")
        mLoginCoordinador(vLogin)
      //}
    }

    /*console.log("La respuesta fue: " + respuesta)
    console.log("El nombre de la persona es: " + usuario)
    console.log("Tiene rol de consejero: " + consejero)
    console.log("Estado de la persona: " + estado)*/

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
    .then(data => {
      console.log(data.msg)});
    /*alert("Se registro como moderador. Espere para ser aceptado en el programa ")*/
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