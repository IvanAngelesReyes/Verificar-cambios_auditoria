import * as React from 'react';
import './MBotonExpo.css';

export default function MBotonExpo(){


    return( 
        <div className='divBtnExpo'>
            <button className="btnExpo"> {/*Agregar la accion de mostrar los botones a este boton*/}
                <div className='divTextoBotonExpo'>
                    <p id="tituloExpo">Titulo: Humanizacion en tiempos de pandemia</p>
                    <p id="ponentesExpo">Ponente(s): Montoya Vargas, Jessica Diana </p>
                    <p id="institucionExpo">Institucion(es): Universidad Autonoma de Morelos </p>
                </div>
                
            </button>
            <div className="divOpcionesExpo">
                <button id="btnControlExpo">Control de exposicion</button>
                <button id="btnListaAsistencia" >Lista de asistencia</button>
                
                
                
            </div>
        </div>
    );
}