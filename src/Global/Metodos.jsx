import Gets from "../Util/Gets"
import * as Posts from "../Util/Posts";

export const generatePasswordRand = (length, type) => {
  let characters = "";
  switch (type) {
    case "num":
      characters = "0123456789";
      break;
    case "alf":
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case "rand":
      //FOR ↓
      break;
    case "more":
      characters =
        "!@#$%^&*()~?`/<>:;'[{}]abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      break;
    default:
      characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      break;
  }
  var pass = "";
  for (let i = 0; i < length; i++) {
    if (type === "rand") {
      pass += String.fromCharCode((Math.floor(Math.random() * 100) % 94) + 33);
    } else {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  return pass;
};

export const chunckArrayInGroups = async (arr, size) => {
  size = size >= 20 ? 20 : size;
  var chunk = [],
    i; // declara array vacio e indice de for
  if (size>0) {
    for (
      i = 0;
      i <= arr.length;
      i += size // loop que recorre el array
    )
      chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador
    chunk.pop();
  }
  return [...chunk];
};

//Verifica las posibles respuestas que le pueden salir a un moderador
export function verificaResMod(vResponse){

  let respuesta = vResponse.msg
  let consejero = vResponse.vUsuario?.consejero

  //console.log("MSG ---> " + respuesta)
  //console.log("ESTADO ---> " + estado)
  //console.log("CONSEJERO ---> " + consejero)

  if(respuesta === 'algo salio mal'){
    alert('Algo salio mal')
  }else{
    //No encontro al usuario en la base de datos
    if(respuesta === "Usuario / Contraseña incorrectos"){
        //alert("El usuario o contraseña son incorrectos (moderador no encontrado)")
        return "modnoencontrado"  
    }else{
      if(respuesta === "Usuario / Password incorrectos"){
        //alert("El usuario o contraseña son incorrectos (contra incorrecta moderador)")
        return "moderrorcontra"
      }else{
        if(respuesta === "No tiene autorizacion"){
          alert("Debe esperar a que el administrador apruebe su solicitud")
          return "modnoautorizado";
        }else{
          if(respuesta === "Inicio de sesion correcto")
          {
            if(consejero === false){
              alert("Bienvenido moderador")
              return "modencontradook"
            }else{
                alert("Bienvenido moderador - consejero")
                return "modconencontradook"
              }
          }
        }
      }
    }
  }
};

export function verificaRAdmin(vResponse){

  let respuesta = vResponse.msg

  //console.log("MSG ---> " + respuesta)

  if(respuesta === "Usuario / Contraseña incorrectos"){
    alert("El usuario o contraseña son incorrectos (admin no encontrado)")
      return "adminnoencontrado";
  }else{

    if (respuesta === "Usuario / Password incorrectos") {
      alert("El usuario o contraseña son incorrectos (admin) ");
      return "adminerrorcontra";
    }
  
    if(respuesta === "Inicio de sesion correcto"){
      alert("Bienvenido administrador")
      return "adminencontradook"
    }

  }

  // if(respuesta === "No tiene autorizacion"){
  //     alert("Debe esperar a que el administrador apruebe su solicitud")
  //     //return "adminencontrado";
  //     return "noautorizado";
  // }else{
  //     if(respuesta === "Inicio de sesion correcto"){
  //         alert("Bienvenido administrador")
  //         return "adminencontrado"
  //     }
  // }
};

export function verificaRC(vResponse){

  let respuesta = vResponse.msg

  //console.log("MSG ---> " + respuesta)

  if(respuesta === "Usuario / Contraseña incorrectos"){
      //alert("El usuario o contraseña son incorrectos (consejero no encontrado)")
      return "connoencontrado"
  }else{
    if(respuesta === "Usuario / Password incorrectos"){
      //alert("El usuario o contraseña son incorrectos (consejero)")
      return "conerrorcontra"
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
        return "connoautorizado"
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido consejero (desde consejero)")
            return "conencontradook"
        }
    }
  }

};

//Auxiliares
export function verificaRCoo(vResponse){

  let respuesta = vResponse.msg

  //console.log("MSG ---> " + respuesta)

  if(respuesta === "Usuario / Contraseña incorrectos"){
      //alert("El usuario o contraseña son incorrectos (auxiliar no encontrado)")
      return "auxnoencontrado"
  }else{
    if(respuesta === "Usuario / Password incorrectos"){
      //alert("El usuario o contraseña son incorrectos (auxiliar)")
      return "auxerrorcontra"
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
        return "auxnoautorizado"
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido auxiliar")
            return "auxencontradook"
            //LLAMAR LA VENTANA DE CONSEJEROS
        }
    }
  }
};

export function verificaRRM(vDatosRegistro,vCorreo){

  let arregloErrores = []
  const numeroErrores = vDatosRegistro.errors?.length;

  //Banderas para tipos de errores
  let errorCorreo = false;
  let errorFormato = false;
  let errorFormatoCorreo = false;

  for(let i=0;i<numeroErrores;i++){
      arregloErrores[i] = vDatosRegistro.errors[i].msg

      if(arregloErrores[i] === "El email -- " + vCorreo + " -- ya existe"){
          errorCorreo = true;
      }

      if(arregloErrores[i] === "se estan ingresando datos no permitidos"){
          errorFormato = true;
      }

      if(arregloErrores[i] === "el correo no es valido"){
          errorFormatoCorreo = true;
      }
  }

  //console.log("ARREGLO ERRORES----------")
  //console.log(arregloErrores)

  if(vDatosRegistro.msg === "Moderador a sido creado correctamente"){
      alert("Su registro se realizo correctamente")
      //Posts.mEnviarCorreo(1,vCorreo)
      return false;
  }else{
      if(errorFormato === true){
          alert("Se estan ingresando datos no permitidos, por favor verifique los campos")
          return true;
      }else{
          if(errorCorreo === true ){
              alert("Este correo ya ha sido registrado previmente. Por favor elija uno diferente")
              return true;
          }else{
              if(errorFormatoCorreo === true){
                  alert("Verifique que el correo tenga el formato correcto")
                  return true;
              }
          }
      } 
  }
}