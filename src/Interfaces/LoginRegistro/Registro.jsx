import React, { useState } from 'react';
import * as Mui from "@mui/material";
import './Registro.css';
import CUniversidades from '../../Componentes/Selects/CUniversidades.jsx';
import CContra from '../../Componentes/RegistroModeradores/CContra.jsx';
import CAreaInteres from '../../Componentes/Selects/CAreaInteres.jsx';
import * as Posts from "../../Util/Posts";
/*Variables de los componentes de institucion, area y contraseña*/

export default function Registro(){

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

    const handleClick = () => {
        const vRegistroM = {
          nombre: vNombre,
          apellido_paterno: vApellidoP,
          apellido_materno: vApellidoM,
          correo: vCorreo,
          password: values.password,
          area_interes: vArea,
          area_interes2: vArea2,
          institucion: vInstitucion,
          rol: "MODERADOR_ROLE"
        };

        console.log(vNombre);
        console.log(vApellidoP);
        console.log(vApellidoM);
        console.log(vCorreo);
        console.log(values.password);
        console.log(vArea);
        console.log(vArea2);
        console.log(vInstitucion);

        Posts.mAgregarModerador(vRegistroM);
        Posts.mEnviarCorreo("1",vCorreo + ",leandrgomez682@gmail.com") /* 2o parametro. Correo al cordinador*/
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

                        {/* <p>¿Ya tienes una cuenta? <a href="https://www.programadelfin.org.mx/">Inicia sesion aqui</a> </p> */}
                        

                    </section>

                </div>

            </div>

        </section>
    );
}