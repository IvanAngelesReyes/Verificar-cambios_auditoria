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
export function verificaRM(vResponse){

  let respuesta = vResponse.msg
  //let estado = vResponse.vUsuario?.estado
  let consejero = vResponse.vUsuario?.consejero

  console.log("MSG ---> " + respuesta)
  //console.log("ESTADO ---> " + estado)
  console.log("CONSEJERO ---> " + consejero)

  // 1. Verifica si existe o no el correo dentro de moderadores
  // 2. Verifica si tiene o no autorizacion
  // 3. Verifica si el usuario y contraseña son correctos
  // 4. Verifica si es consejero o no

  //alert("ESTE ES EL VALOR DE RESPUESTA --> " + respuesta)

  if(respuesta === 'algo salio mal'){
    alert('Algo salio mal')
  }else{
    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            if(consejero === false){
                alert("Bienvenido moderador")
                //LLAMAR LA VENTANA DE MODERADORES
            }
            else{
              alert("Bienvenido consejero")
                //LLAMAR LA VENTANA DE CONSEJEROS
            }
        }
    }
  }

  
};

export function verificaRC(vResponse){

  let respuesta = vResponse.msg

  //console.log("MSG ---> " + respuesta)

  if(respuesta === "Usuario / Contraseña incorrectos"){
      alert("El usuario o contraseña son incorrectos")
  }

  if(respuesta === "Usuario / Password incorrectos"){
      alert("El usuario o contraseña son incorrectos")
  }

  if(respuesta === "No tiene autorizacion"){
      alert("Debe esperar a que el administrador apruebe su solicitud")
  }else{
      if(respuesta === "Inicio de sesion correcto"){
          alert("Bienvenido consejero")
          //LLAMAR LA VENTANA DE CONSEJEROS
      }
  }
};

export function verificaRCoo(vResponse){

  let respuesta = vResponse.msg

  //console.log("MSG ---> " + respuesta)

  if(respuesta === "Usuario / Contraseña incorrectos"){
      alert("El usuario o contraseña son incorrectos")
  }

  if(respuesta === "Usuario / Password incorrectos"){
      alert("El usuario o contraseña son incorrectos")
  }

  if(respuesta === "No tiene autorizacion"){
      alert("Debe esperar a que el administrador apruebe su solicitud")
  }else{
      if(respuesta === "Inicio de sesion correcto"){
          alert("Bienvenido consejero")
          //LLAMAR LA VENTANA DE CONSEJEROS
      }
  }
};