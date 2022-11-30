import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from './Interfaces/LoginRegistro/Login'
import Registro from './Interfaces/LoginRegistro/Registro'
import RecuperaContra from './Interfaces/LoginRegistro/RecuperaContra'
import CModerador from "./Interfaces/Moderadores/CModerador";
import CCoordinador from "./Interfaces/Coordinador/CCoordinador";
import CAdministrador from "./Interfaces/Administrador/CAdministrador";

export default function Main(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/registro' element={<Registro/>}/>
                <Route path='/recuperacontra' element={<RecuperaContra/>}/>
                <Route path='/moderador' element={<CModerador/>}/>
                <Route path='/auxiliar' element={<CCoordinador/>}/>
                <Route path='/administrador' element={<CAdministrador/>}/>
            </Routes>
        </BrowserRouter>
    );
}