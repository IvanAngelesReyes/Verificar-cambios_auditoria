/*
SmartSoft
Componente: Login
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente es el login donde un usuario inicia sesion

Numero de metodos: 1
Componentes relacionados: RecuperaContra, Registro
*/

import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import "./Login.css";
import * as Posts from "../../Util/Posts";
import * as Variables from "../../Global/Variables";
import CModerador from "../Moderadores/CModerador";
import Moderadores from "../../Moderadores";
import { useState } from "react";
//import { Navigate, NavLink, useNavigate } from "react-router-dom";

export default function Login(props) {
  const { setvFrame, mSetvFramePrincipal } = props;
  //const navigate = useNavigate();

  const [vCorreo, setvCorreo] = React.useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  //EL PEDO ES AQUI
  //const [vDatosLogin, setvDatosLogin] = React.useState([]);

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
      password: values.password,
    };

    if (verificaCampos(vLogin) === true) {
      var mSeleccionarFrame = (vRes) => {
        console.log("vRes ---> " + vRes.r);
        switch (vRes.r) {
          case "modencontradook":
            mSetvFramePrincipal(Variables.v_FRFAMES.moderadores, vRes.usuario);
            break;
          case "modconencontradook":
            mSetvFramePrincipal(Variables.v_FRFAMES.consejeros, vRes.usuario);
            break;
          case "ventanaconsejero":
            mSetvFramePrincipal(Variables.v_FRFAMES.consejeros, vRes.usuario);
            break;
          case "ventanaauxiliar":
            mSetvFramePrincipal(Variables.v_FRFAMES.auxiliares, vRes.usuario);
            break;
          case "ventanaadmin":
            mSetvFramePrincipal(Variables.v_FRFAMES.administrador,vRes.usuario);
            break;
          default:
            break;
        }
      };
      Posts.mLogins(vLogin, mSeleccionarFrame);
    }
  };

  return (
    <section id="sectionContenedorL">
      <div className="contenedorPrincipalL">
        <div className="contenedorIzquierdaL">
          <img
            src="https://www.programadelfin.org.mx/recursos/images/logotipo-programa-blanco.png"
            widht="50%"
            height="50%"
            alt="icono_delfin"
          />
        </div>

        <div className="contenedorDerechaL">
          <section id="contenidoDerechaL">
            <h2>Programa Delfín</h2>

            <p id="textoLogin">
              Si ya tienes una cuenta de moderador, consejero, o coordinador
              escribe tu usuario y contraseña para iniciar sesion
            </p>

            <form id="formContenedorL" action="">
              {/*Text field del campo de correo*/}
              <Mui.Box
                sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}
              >
                <MuiIcons.AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <Mui.TextField
                  id="tfEmail"
                  label="Escribe tu correo electronico"
                  variant="standard"
                  defaultValue=""
                  value={vCorreo}
                  onChange={(e) => setvCorreo(e.target.value)}
                />
              </Mui.Box>

              {/*Text field del campo de contraseña*/}
              <Mui.Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                  <Mui.FormControl
                    sx={{ m: 1, width: "85%" }}
                    variant="standard"
                  >
                    <Mui.InputLabel htmlFor="standard-adornment-password">
                      Contraseña
                    </Mui.InputLabel>
                    <Mui.Input
                      id="standard-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <Mui.InputAdornment position="end">
                          <Mui.IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <MuiIcons.VisibilityOff />
                            ) : (
                              <MuiIcons.Visibility />
                            )}
                          </Mui.IconButton>
                        </Mui.InputAdornment>
                      }
                    />
                  </Mui.FormControl>
                </div>
              </Mui.Box>
            </form>

            {/* <NavLink to="/recuperacontra">¿Olvidaste tu contraseña?</NavLink> */}

            <a id="olvidasteContra" onClick={() => setvFrame("recuperarc")}>
              ¿Olvidaste tu contraseña?
            </a>

            <Mui.Button
              variant="contained"
              id="btnIniciar"
              onClick={handleClick}
            >
              Iniciar sesión
            </Mui.Button>

            {/* <Mui.Button variant="contained" id="btnPrueba" onClick={setvFrame("moderador")}>Prueba</Mui.Button> */}

            {/* <button onClick={
                                () => navigate('/registro')
                            }
                            >Boton de prueba</button> */}

            <p>¿Quieres formar parte de los moderadores? </p>
            {/* <NavLink to="/registro">Registrate aqui</NavLink> */}

            <a id="linkRegistroLogin" onClick={() => setvFrame("registro")}>
              Registrate aqui
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}

function verificaCampos(vLogin) {
  if (vLogin.correo === "") {
    alert("Por favor escriba su correo en el campo correspondiente");
    return false;
  } else {
    if (vLogin.password === "") {
      alert("Por favor escriba su contraseña en el campo correspondiente");
      return false;
    } else {
      return true;
    }
  }
}