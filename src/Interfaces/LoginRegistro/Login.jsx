import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import './Login.css';
import * as Posts from "../../Util/Posts";

export default function Login(props){

    /**Trae los datos de el post de login*/
    //const {respuesta, setRespuesta} = React.useState("");

    const {setvFrame}=props

    const[vCorreo,setvCorreo] = React.useState("");

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
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

        console.log(vCorreo);
        console.log(values.password);

        Posts.mLoginModerador (vLogin);
        //Posts.mLoginCoordinador(vLogin);

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
                        <p id="olvidasteContra" onClick={()=>setvFrame("recuperarc")}>¿Olvidaste tu contraseña?</p>

                        <Mui.Button variant="contained" id="btnIniciar" onClick={handleClick}>Iniciar sesión</Mui.Button>

                        <p>¿Quieres formar parte de los moderadores? </p>
                        <p id='linkRegistroLogin' onClick={()=>setvFrame("registro")}>Registrate aqui</p>

                    </section>

                </div>

            </div>

        </section>
    );
}