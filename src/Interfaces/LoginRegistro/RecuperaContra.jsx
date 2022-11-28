import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import './RecuperaContra.css';

export default function CRecuperaContra(){

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
                        <Mui.Box sx={{ display: 'flex', alignItems: 'flex-end',width:'75%' }}>
                            <MuiIcons.AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <Mui.TextField id="tfEmail" label="Escribe tu correo electronico" variant="standard" />
                        </Mui.Box>

                        {/*Boton de recuperar contraseña*/}
                        <Mui.Button variant="contained" id="btnRC">Enviar correo de recuperacion</Mui.Button>

                    </div>

                </div>
                
            </div>

        </section>

    );

}