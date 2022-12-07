/*
SmartSoft
Componente: MBotonSala
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Boton mediante el que se accede a la informacion de una sala

Numero de metodos: 1
Componentes relacionados: CSalas, MBotonExpo
*/

import React, { Fragment } from 'react';
import CDetalleSala from '../../Interfaces/Moderadores/CDetalleSala';
import ConjuntoSalas from '../../Interfaces/Moderadores/ConjuntoSalas';
//import CSalas from "../Moderadores/CSalas";
import './MBotonSala.css';
import { useState } from 'react';

export default function MBotonSala(props){
    
    const {setvFrame,
            setvNombre,
            setvArea,
            setvModalidad,
            setvFecha,
            setvUbicacion,
            setvSalon,
            setvTurno,
            setvNoponentes,
            setvUrl}=props
    
    const handleClick = () => {
        console.log("Detalles de la sala----------")
        console.log(props);

        // <CDetalleSala
        //     nombreSala={props.nombreSala}
        //     areaSala={props.areaSala}
        //     modalidadSala={props.modalidadSala}
        //     fechaSala={props.fechaSala}
        //     nopontentesSala={props.nopontentesSala}/>

        
        console.log("-----------------------------");
    }

    const ventana = () => {
        console.log(props);
        setvFrame("detallesalas");
        setvNombre(props.nombreSala);
        setvArea(props.areaSala);
        setvModalidad(props.modalidadSala);
        setvFecha(props.fechaSala);
        setvUbicacion(props.ubicacionSala);
        setvSalon(props.salonSala);
        setvTurno(props.turnoSala);
        setvNoponentes(props.nopontentesSala);
        setvUrl(props.urlSala);
    }

    return(
        <section id='sectionContenedorBS'>
            <div className='divContenedorBS'>
                <button className="btnSalaBS" onClick = {ventana}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5602/5602892.png" id="imgBotonBS" height ="40%" width="3%" alt="img_zoom" />
                    <div className='divTextoBotonBS'>
                        <p id="tituloSalaBS">{props.nombreSala}</p>
                        <p id="areaSalaBS">{props.areaSala}</p> 
                    </div>
                </button>
            </div>            
        </section>
    );
}

