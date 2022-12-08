/*
SmartSoft
Componente: RecuperaContra
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Componente mediante el cual se recupra la contraseña de un usuario

Numero de metodos: 1
Componentes relacionados: Login
*/

import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import './RecuperaContra.css';
import * as Puts from '../../Util/Puts';
import * as Posts from "../../Util/Posts";

export default function CRecuperaContra(){

    const [vCorreo, setvCorreo] = React.useState("");

    const handleClick = () => {

        const vEmail = {
            correo:vCorreo
        }

        if (verificaCampos(vEmail) === true)
        {
          Puts.mRPsswdModeradores(vEmail)
          Posts.mEnviarCorreo(7,vEmail.correo,vEmail.password)

        }
        

    }

    /*const handleClick = () => {

        const vEmail = {
            correo:vCorreo
        }

        const vEmail2 = {
            correo:vCorreo,
            password: ""

        }

        if (verificaCampos(vEmail) === true) {
            var mSeleccionarFrame = (vRes) => {
              console.log("vRes ---> " + vRes.r);
              switch (vRes.r) {
                case "modencontradook":
                  
                  break;
                case "modconencontradook":
               
                  break;
                case "ventanaconsejero":
             
                  break;
                case "ventanaauxiliar":
             
                  break;
                case "ventanaadmin":
               
                  break;
                default:
                  break;
              }
            };
            Posts.mLogins(vEmail, mSeleccionarFrame);
            //Puts.mRPsswdModeradores(vEmail)
          }
    }*/

    return(

        <section id='sectionContenedorRC'>

            <div className='contenedorPrincipalRC'>

                <div className='divArriba'>

                    <h2>Recuperar contraseña</h2>

                    <img src="https://www.programadelfin.org.mx/recursos/images/logotipo-programa-blanco.png" widht="70%" height="70%" alt="icono_delfin"/>

                </div>

                <div className='divAbajo'>

                    <p>Ingrese el correo que registro dentro de la plataforma</p>

                    <div className="divFormularioRC">

                        {/*Text field del campo de correo*/}
                        <Mui.Box sx={{ display: "flex", alignItems: "flex-end", width: "75%" }}>
                            <MuiIcons.AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }}/>
                            <Mui.TextField
                            id="tfEmail"
                            label="Escribe tu correo electronico"
                            variant="standard"
                            defaultValue=""
                            value={vCorreo}
                            onChange={(e) => setvCorreo(e.target.value)}
                            />
                        </Mui.Box>

                        {/*Boton de recuperar contraseña*/}
                        <Mui.Button variant="contained" id="btnRC" onClick={handleClick}>Enviar correo de recuperacion</Mui.Button>

                    </div>

                </div>
                
            </div>

        </section>

    );


    function verificaCampos(vEmail) {
        if (vEmail.correo === "") {
          alert("Por favor escriba su correo en el campo correspondiente");
          return false;
        }
      }

}