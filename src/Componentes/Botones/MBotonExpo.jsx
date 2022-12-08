/*
SmartSoft
Componente: MBotonExpo
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Boton mediante el que se accede a la informacion de una exposicion

Numero de metodos: 1
Componentes relacionados: CSalas, MBotonExpo
*/


import * as React from 'react';
import './MBotonExpo.css';

export default function MBotonExpo(){

    const handleClick = () => {
        console.log("Detalles de la exposicion----------")        
        console.log("-----------------------------");
    }

    return( 
        <div className='divBtnExpo'>
            <button className="btnExpo" onClick={handleClick}> {/*Agregar la accion de mostrar los botones a este boton*/}
                <div className='divTextoBotonExpo'>
                    <p id="tituloExpo">Titulo: Humanizacion en tiempos de pandemia</p>
                    <p id="ponentesExpo">Ponente(s): Montoya Vargas, Jessica Diana </p>
                    <p id="institucionExpo">Institucion(es): Universidad Autonoma de Morelos </p>
                </div>
            </button>
            {/* <div className="divOpcionesExpo">
                <button id="btnControlExpo">Control de exposicion</button>
                <button id="btnListaAsistencia" >Lista de asistencia</button>
            </div> */}
        </div>
    );
}