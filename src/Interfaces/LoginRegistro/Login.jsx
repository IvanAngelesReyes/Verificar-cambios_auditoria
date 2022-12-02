import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import './Login.css';
import * as Posts from "../../Util/Posts";
import { Navigate, NavLink,useNavigate } from 'react-router-dom';

export default function Login(props){

    const {setvFrame}=props
    const navigate = useNavigate()

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

            const promise = Posts.mLogins(vLogin)

            promise.then((res) => {
                let vRes = res
                switch(vRes){
                    case "moderadorencontrado":
                        console.log("ENTRANDO A MODERADOR")
                        navigate('/moderador')
                        break;
                    case "modconsejeroencontrado":
                        navigate('/moderador')
                        break;
                    case "ventanaconsejero":
                        navigate('/moderador')
                        break;
                    case "ventanaauxiliar":
                        navigate('/auxiliar')
                        break;
                    case "ventanaadmin":
                        navigate('/administrador')
                        break;    
                    default:
                    break;
                } 
            })   
        }
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

                            {/* <p id="olvidasteContra" onClick={
                                ()=>setvFrame("recuperarc")
                            }>¿Olvidaste tu contraseña?</p> */}
                            <NavLink to='/recuperacontra'>¿Olvidaste tu contraseña?</NavLink>

                            <Mui.Button variant="contained" id="btnIniciar" onClick={handleClick}>Iniciar sesión</Mui.Button>

                            {/* <Mui.Button variant="contained" id="btnPrueba" onClick={setvFrame("moderador")}>Prueba</Mui.Button> */}

                            {/* <button onClick={
                                () => navigate('/registro')
                            }
                            >Boton de prueba</button> */}

                            <p>¿Quieres formar parte de los moderadores? </p>
                            {/* <p id='linkRegistroLogin' onClick={
                                    redirigeR
                                }
                                >Registrate aqui</p> */}

                            <NavLink to='/registro'>Registrate aqui</NavLink>

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