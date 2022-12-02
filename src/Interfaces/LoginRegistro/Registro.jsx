/*
SmartSoft
Componente: Registro
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
componente mediante el cual se dan de alta usuarios

Numero de metodos: 1
Componentes relacionados: Login
*/

import React, { useState } from 'react';
import * as Mui from "@mui/material";
import './Registro.css';
import CUniversidades from '../../Componentes/Selects/CUniversidades.jsx';
import CContra from '../../Componentes/RegistroModeradores/CContra.jsx';
import CAreaInteres from '../../Componentes/Selects/CAreaInteres.jsx';
import * as Posts from "../../Util/Posts";
//import { Navigate, NavLink,useNavigate } from 'react-router-dom';

export default function Registro(){
    //const navigate = useNavigate()

    /**Trae los datos de la contraseña*/
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    //Variables para los datos
    const[vNombre,setvNombre] = useState("");
    const[vApellidoP,setvApellidoP] = useState("");
    const[vApellidoM,setvApellidoM] = useState("");
    const[vCorreo,setvCorreo] = useState("");
    const[vInstitucion,setvInstitucion] = useState("");
    const[vArea,setvArea] = useState("");
    const[vArea2,setvArea2] = useState("");
    // const[vPassword,setvPassword] = useState("");

    //Variable que trae los datos de el POST
    const [vDatosRegistro, setvDatosRegistro] = React.useState([]);

    const handleClick = () => {
        const vRegistroM = {
          nombre: vNombre,
          apellido_paterno: vApellidoP,
          apellido_materno: vApellidoM,
          correo: vCorreo,
          password: values.password,
          area_interes_1: vArea,
          area_interes_2: vArea2,
          institucion: vInstitucion,
          rol: "MODERADOR_ROLE"
        };

        /*console.log("DATOS INGRESADOS: -------------")
        console.log(vNombre);
        console.log(vApellidoP);
        console.log(vApellidoM);
        console.log(vCorreo);
        console.log(values.password);
        console.log(vArea);
        console.log(vArea2);
        console.log(vInstitucion);
        console.log("-----------------------------")*/

        if(validarRegistro(vNombre,vApellidoP,vApellidoM,vCorreo,vInstitucion,vArea,vArea2,values.password) === true){
            if(validaTamanio(vNombre.length,values.password.length)===true){
                
                Posts.mAgregarModerador(vRegistroM,setvDatosRegistro)
                //.then(validaRespuesta(vDatosRegistro,vCorreo));
                
                //registro(vRegistroM,setvDatosRegistro,vDatosRegistro,vCorreo)

            }

            //console.log("RESPUESTA----------")
            //console.log(vDatosRegistro)
        }
    }

    return(
        <section id='sectionContenedorReg'>
            <div className="contenedorPrincipalReg">

                <div className="contenedorIzquierdaReg">
                    <img src="https://www.programadelfin.org.mx/recursos/images/logotipo-programa-blanco.png" widht="40%" height="40%" alt="icono_delfin"/>

                </div>

                <div className="contenedorDerechaReg">

                    <section id="contenidoDerechaReg">
                        
                        <h1 id="h1Reg">Crea una cuenta</h1>

                        <p id='pReg'>Forma parte del equipo de moderadores</p>

                        {/**Foto de perfil*/}
                        {/*Esto probablemente se tenga que cambiar por un boton con una imagen*/}
                        {/* <img id="imgPerfilReg" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="foto_perfil" width="15%" height="15%"/> */}

                        <form id="formReg" action="">

                            {/* <input type="file" id="inputImagen"/> */}

                            {/*Text field del campo de nombre*/}
                            <Mui.Box
                                component="formNR"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <Mui.TextField id="tfNombreR" label="Nombre" variant="standard"
                                defaultValue=""
                                value={vNombre}
                                onChange={(e) => setvNombre(e.target.value)}/>
                            </Mui.Box>

                            {/*Text field del campo de apellido paterno*/}
                            <Mui.Box
                                component="formAP"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <Mui.TextField id="tfApellidoPR" label="Apellido paterno" variant="standard"
                                defaultValue=""
                                value={vApellidoP}
                                onChange={(e) => setvApellidoP(e.target.value)}/>
                            </Mui.Box>

                            {/*Text field del campo de apellido materno*/}
                            <Mui.Box
                                component="formAM"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <Mui.TextField id="tfApellidoMR" label="Apellido materno" variant="standard" 
                                defaultValue=""
                                value={vApellidoM}
                                onChange={(e) => setvApellidoM(e.target.value)}/>
                            </Mui.Box>

                            {/*Text field del campo de correo*/}
                            <Mui.Box
                                component="formC"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '70%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <Mui.TextField id="tfCorreoR" label="Correo electronico" type="email" variant="standard" 
                                defaultValue=""
                                value={vCorreo}
                                onChange={(e) => setvCorreo(e.target.value)}/>
                            </Mui.Box>

                            {/*Text field del campo de institucion*/}
                            {/* <CUniversidades/> */}
                            <CUniversidades vInstitucion={vInstitucion} setvInstitucion={setvInstitucion}/>

                            {/*Text field del area de interes*/}
                            <CAreaInteres vArea={vArea} setvArea={setvArea}/>

                            {/*Text field del area de interes*/}
                            <CAreaInteres vArea={vArea2} setvArea={setvArea2}/>

                            {/*Text field del campo de contraseña*/}
                            <CContra values={values} setValues={setValues}/>

                        </form>

                        <Mui.Button variant="contained" id="btnCrearCuentaMR" onClick={handleClick}>Crear cuenta</Mui.Button>
                        
                    </section>

                </div>

            </div>

        </section>
    );
}

// async function registro(vRegistroM,setvDatosRegistro,vDatosRegistro,vCorreo){
//     await(Posts.mAgregarModerador(vRegistroM,setvDatosRegistro))
//     .then(validaRespuesta(vDatosRegistro,vCorreo))
// }

function validarRegistro(nombre,apellidop,apellidom,correo,institucion,area1,area2,contrasena){
    //Validaciones de campos vacios
    if(nombre === ""){
        alert("Por favor escriba su nombre en el campo correspondiente")
        return false;
    }else{
        if(apellidop === ""){
            alert("Por favor escriba su apellido paterno en el campo correspondiente")
            return false;
        }else{
            if(apellidom === ""){
                alert("Por favor escriba su apellido materno en el campo correspondiente")
                return false;
            }else{
                if(correo === ""){
                    alert("Por favor escriba su correo en el campo correspondiente")
                    return false;
                }else{
                    if(institucion === ""){
                        alert("Por favor seleccione una institucion")
                        return false;
                    }else{
                        if(area1 === ""){
                            alert("Por favor seleccione el area que desea moderar")
                            return false;
                        }else{
                            if(area2 === ""){
                                alert("Por favor seleccione una segunda opcion de area que desea moderar")
                                return false;
                            }else{
                                if(contrasena === ""){
                                    alert("Por favor escriba una contraseña para su cuenta en el campo correspondiente")
                                    return false;
                                }else{
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function validaTamanio(nombre,contra){
    if(nombre < 4){
        alert("Por favor escriba un nombre mayor a 4 letras")
        return false;
    }else{
        if(contra < 8){
            alert("Por favor escriba una contraseña mayor a 8 digitos")
            return false;
        }else{
            return true;
        }
    }
}

function validaRespuesta(vDatosRegistro,vCorreo){

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