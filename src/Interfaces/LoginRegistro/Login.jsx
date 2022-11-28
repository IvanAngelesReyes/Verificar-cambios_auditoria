import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import './Login.css';
import * as Posts from "../../Util/Posts";
import * as Variables from "../../Global/Variables";

export default function Login(props){

    const {setvFrame}=props

    const[vCorreo,setvCorreo] = React.useState("");
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    //EL PEDO ES AQUI
    const [vDatosLogin, setvDatosLogin] = React.useState([]);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    const handleClick = () => {

        const vLogin = {
            correo: vCorreo,
            password: values.password
        };

        if(verificaCampos(vLogin) === true){
            
            console.log("FUNCION DEL LOGIN------------------")

            //console.log("ANTES DE POST")
            //console.log(vDatosLogin)

            //PONER UN AWAIT
            Posts.mLoginAdmin(vLogin)
            
            //Posts.mLoginCoordinador(vLogin)
            //.then(verificaRespuestas(vDatosLogin))


            //console.log(vDatosLogin)

            console.log("----------------------------------")

            //console.log("DESPUES DE POST")
            //console.log(vDatosLogin)

            //ingresoModerador(vLogin,setvDatosLogin,vDatosLogin)

            //1. VERIFICA SI ES MODERADOR, CONSEJERO, AUXILIAR O SUPERADMIN

            // console.log("TIPO USUARIO")
            // console.log(tipousuario)

            // if(tipousuario === "moderador"){
            //     Posts.mLoginModerador(vLogin,setvDatosLogin)
            //     verificaRespuestas(vDatosLogin)
            // }else{
            //     if(tipousuario === "consejero"){
            //         Posts.mLoginConsejero(vLogin,setvDatosLogin)
            //         console.log("RESPUESTA DEL POST")
            //         console.log(vDatosLogin)
            //         //tipousuario = ""
            //         //verificaRespuestas(vDatosLogin);
            //     }
            // }

            // if(ingresoModerador(vLogin,setvDatosLogin,vDatosLogin) === true){
            //     console.log("LLAMANDO VENTANA DE MODERADOR")
            //     console.log("RESPUESTA DEL POST")
            //     console.log(vDatosLogin)
            // }else{
            //     //console.log("LLAMANDO VENTANA DE CONSEJERO ")
            //     if(ingresoConsejero(vLogin,setvDatosLogin,vDatosLogin) === true){
            //         console.log("LLAMANDO VENTANA DE CONSEJERO")
            //     }
            // }


            // const datosRecuperados ={
            //     correo: vDatosLogin.vUsuario?.correo,
            //     estado:vDatosLogin.vUsuario?.estado,
            //     consejero:vDatosLogin.vUsuario?.consejero
            // }

            //vLogin.correo = ""
            //vLogin.password = ""

            //if(verificaRespuestas(vDatosLogin)===false){
                //Posts.mLoginAdministrador(vLogin,setvDatosLogin)
                //verificaRespuestasAdmin(vLogin,setvDatosLogin)
            //}
        }

        //Validacion de que los campos no esten vacios
        // if(vLogin.correo === "" || vLogin.password===""){
        //     alert("Debe rellenar ambos campos")
        // }else{
        //     alert("ENTRO EN EL ELSE")
        //     Posts.mLoginModerador(vLogin,setvDatosLogin);

        //     /*const datosRecuperados ={
        //         respuesta:vDatosLogin.msg,
        //         correo: vDatosLogin.vUsuario?.correo,
        //         estado:vDatosLogin.vUsuario?.estado,
        //         consejero:vDatosLogin.vUsuario?.consejero
        //     }

        //     if(datosRecuperados.respuesta === "login ok"){
        //         console.log("Datos del moderador")
        //         console.log(vDatosLogin)
        //         verificaUsuario(datosRecuperados)
        //     }else{
        //         if(datosRecuperados.respuesta === "Usuario / Contraseña incorrectos"){
        //             //alert("El usuario o contraseña son incorrectos")
        //             Posts.mLoginAdministrador(vLogin,setvDatosLogin);
        //         }
        //     }*/
        // }
    }

    return(
        <section id='sectionContenedorL'>
            <div className="contenedorPrincipalL">

                <div className="contenedorIzquierdaL">
                    <img src="https://www.programadelfin.org.mx/recursos/images/logotipo-programa-blanco.png" widht="50%" height="50%" alt="icono_delfin"/>
                </div>

                <div className="contenedorDerechaL">

                    <section id="contenidoDerechaL">

                        <h2>Programa Delfin</h2>

                        <p id="textoLogin">Si ya tienes una cuenta de moderador, consejero, o coordinador escribe tu usuario y contraseña para iniciar sesion</p>

                        <form id="formContenedorL" action="">

                        {/*Text field del campo de correo*/}
                        <Mui.Box sx={{ display: 'flex', alignItems: 'flex-end',width:'100%' }}>
                            <MuiIcons.AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <Mui.TextField id="tfEmail" label="Escribe tu correo electronico" variant="standard"
                            defaultValue=""
                            value={vCorreo}
                            onChange={(e) => setvCorreo(e.target.value)}/>
                        </Mui.Box>

                        {/*Text field del campo de contraseña*/}
                        <Mui.Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div>

                            <Mui.FormControl sx={{ m: 1, width: '85%' }} variant="standard">
                                <Mui.InputLabel htmlFor="standard-adornment-password">Contraseña</Mui.InputLabel>
                                <Mui.Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <Mui.InputAdornment position="end">
                                    <Mui.IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <MuiIcons.VisibilityOff /> : <MuiIcons.Visibility />}
                                    </Mui.IconButton>
                                    </Mui.InputAdornment>
                                }
                                />
                            </Mui.FormControl>
                            
                            </div>
                        </Mui.Box>
                        </form>

                        {/*Mensaje de Olvidaste tu contraseña*/}
                        <p id="olvidasteContra" onClick={
                            ()=>setvFrame("recuperarc")
                            }>¿Olvidaste tu contraseña?</p>

                        <Mui.Button variant="contained" id="btnIniciar" onClick={handleClick}>Iniciar sesión</Mui.Button>

                        <p>¿Quieres formar parte de los moderadores? </p>
                        <p id='linkRegistroLogin' onClick={
                            ()=>setvFrame("registro")
                            }
                            >Registrate aqui</p>

                    </section>

                </div>

            </div>

        </section>
    );
}

function verificaCampos(vLogin){
    if(vLogin.correo === ""){
        alert("Por favor escriba su correo en el campo correspondiente")
        return false;
    }else{
        if(vLogin.password === ""){
            alert("Por favor escriba su contraseña en el campo correspondiente")
            return false;
        }else{
            return true;
        }
    }
}

function verificaRespuestas(vDatosLogin){

    let respuesta = vDatosLogin.msg
    let estado = vDatosLogin.vUsuario?.estado
    let consejero = vDatosLogin.vUsuario?.consejero

    console.log("MSG ---> " + respuesta)
    console.log("ESTADO ---> " + estado)
    console.log("CONSEJERO ---> " + consejero)

    // 1. Verifica si existe o no el correo dentro de moderadores
    // 2. Verifica si tiene o no autorizacion
    // 3. Verifica si el usuario y contraseña son correctos
    // 4. Verifica si es consejero o no

    alert("ESTE ES EL VALOR DE RESPUESTA --> " + respuesta)

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos")
        //No existe el correo dentro de moderadores y debe buscarlo en coordinadores (admins)
    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido")
            if(consejero === false){
                //LLAMAR LA VENTANA DE MODERADORES
                alert("Entraste como moderador")
                //
            }
            //else{
                //LLAMAR LA VENTANA DE CONSEJEROS
                //alert("Entraste como consejero")
            //    tiposuaurio = "consejero"
            //}
        }
    }
}

/*function ingresoModerador(vLogin,setvDatosLogin,vDatosLogin){

    Posts.mLoginModerador(vLogin,setvDatosLogin)

    let respuesta = vDatosLogin.msg
    let consejero = vDatosLogin.vUsuario?.consejero
    let rol = vDatosLogin.vUsuario?.rol

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos (moderador) ")
        //No existe el correo dentro de moderadores y debe buscarlo en coordinadores (admins)
        //tipousuario = "consejero"
    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
        //return false;
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido")
            if(consejero === false){
                //LLAMAR LA VENTANA DE MODERADORES
                alert("Entraste como moderador")
                return true;
            }else{
                alert("Entraste como consejero")
                //return null;
                //LLAMAR LA VENTANA DE CONSEJEROS
                //tiposuaurio = "consejero"
                //return false;
            }
        }
    }
    
    return null;
}

function ingresoConsejero(vLogin,setvDatosLogin,vDatosLogin){

    Posts.mLoginConsejero(vLogin,setvDatosLogin)

    let respuesta = vDatosLogin.msg

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos (consejero)")
        return false;
        //No existe el correo dentro de moderadores y debe buscarlo en coordinadores (admins)
        //tipousuario = "consejero"
    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido consejero")
            return true
            // if(consejero === false){
            //     //LLAMAR LA VENTANA DE MODERADORES
            //     alert("Entraste como moderador")
            //     return true;
            // }else{
            //     //LLAMAR LA VENTANA DE CONSEJEROS
            //     alert("Entraste como consejero")
            //     //tiposuaurio = "consejero"
            //     return false;
            // }
        }
    }
    return null
}*/

function ingresoModerador(vLogin,setvDatosLogin,vDatosLogin){

    let encontrado = false

    //::::::::::::::::::::::::::::::Busca en MODERADORES:::::::::::::::::::::::::::::::::::::::::
    Posts.mLoginModerador(vLogin,setvDatosLogin)
    let respuesta = vDatosLogin.msg
    let consejero = vDatosLogin.vUsuario?.consejero
    let rol = vDatosLogin.vUsuario?.rol

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos (moderador) ")
        //No existe el correo dentro de moderadores y debe buscarlo en coordinadores (admins)
        //tipousuario = "consejero"

    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
        //return false;
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido")
            if(consejero === false){
                //LLAMAR LA VENTANA DE MODERADORES
                alert("Entraste como moderador")

                encontrado = true
                
            }else{
                alert("Entraste como consejero")
                //return null;
                //LLAMAR LA VENTANA DE CONSEJEROS
                //tiposuaurio = "consejero"
                //return false;

                encontrado = true
            }
        }

        if(encontrado === false)
        {
            ingresoConsejero(vLogin,setvDatosLogin,vDatosLogin, encontrado)
        }
    }
    
    
}

function ingresoConsejero(vLogin,setvDatosLogin,vDatosLogin, encontrado){


    Posts.mLoginConsejero(vLogin,setvDatosLogin)
    let respuesta = vDatosLogin.msg

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos (consejero)")
        //No existe el correo dentro de moderadores y debe buscarlo en coordinadores (admins)
        //tipousuario = "consejero"
    }

    if(respuesta === "Usuario / Password incorrectos"){
        alert("El usuario o contraseña son incorrectos")
    }

    if(respuesta === "No tiene autorizacion"){
        alert("Debe esperar a que el administrador apruebe su solicitud")
    }else{
        if(respuesta === "Inicio de sesion correcto"){
            alert("Bienvenido consejero")
            // if(consejero === false){
            //     //LLAMAR LA VENTANA DE MODERADORES
            //     alert("Entraste como moderador")
            //     return true;
            // }else{
            //     //LLAMAR LA VENTANA DE CONSEJEROS
            //     alert("Entraste como consejero")
            //     //tiposuaurio = "consejero"
            //     return false;
            // }
            encontrado=true
        }
    }
    if(encontrado === false)
    {
        alert("No se encontro usuario en CONSEJEROS ")
    }
  

}

//respuesta = "";

    // if(respuesta === "Usuario / Contraseña incorrectos" || respuesta === "Usuario / Password incorrectos"){
    //     alert("El usuario o contraseña son incorrectos")
    //     return false; //este false es para que entre a otra funcion a verificar si es coordinador 
    // }else{
    //     if(respuesta === "No tiene autorizacion"){
    //         alert("Debe esperar a que el administrador apruebe su solicitud")
    //     }else{
    //         if(respuesta === "Inicio de sesion correcto"){
    //             alert("Bienvenido")
    //             // ABRIR VENTANA DE MODERADOR
    //         }
    //     }
    // }

/*function verificaRespuestasAdmin(vDatosLogin){

    let respuesta = vDatosLogin.msg
    let correo = vDatosLogin.vUsuario?.correo
    let estado = vDatosLogin.vUsuario?.estado

    console.log("MSG ---> " + respuesta)
    console.log("CORREO ---> " + correo)
    console.log("ESTADO ---> " + estado)

    if(respuesta === "Usuario / Contraseña incorrectos"){
        alert("El usuario o contraseña son incorrectos") 
    }else{

    }
}*/

/*function verificaUsuario(datosRecuperados){
    //if(datosRecuperados.respuesta===undefined){
    //    console.log('UNDEFINED')
    //}else{
        //if(datosRecuperados.respuesta==='login ok'){
            if(datosRecuperados.estado===true){
                if(datosRecuperados.consejero===true){
                    alert("Inicio de sesion exitoso como auxiliar")
                    //AQUI DEBE ABRIR LA PAGINA DE MODERADOR CON OPCION DE CONSEJERO
                }else{
                    if(datosRecuperados.consejero===false){
                        //AQUI DEBE ABRIR LA PAGINA DE MODERADOR
                        alert("Inicio de sesion exitoso como moderador")
                    }
                }
            }else{
                if(datosRecuperados.estado===false){
                    alert("Debe esperar respuesta de su coordinador")
                }
            }
        //}else{
            //if(datosRecuperados.respuesta==='Usuario / Contraseña incorrectos'
            //    && datosRecuperados.estado===undefined
            //    && datosRecuperados.consejero===undefined
            //    && datosRecuperados.correo===undefined)
            //    {
            //        alert("El usuario o contraseña son incorrectos")
            //    }
        //}
    //}
}*/