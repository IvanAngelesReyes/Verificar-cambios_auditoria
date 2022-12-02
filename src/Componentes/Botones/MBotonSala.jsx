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

import React from 'react';
import CDetalleSala from '../../Interfaces/Moderadores/CDetalleSala';
import ConjuntoSalas from '../../Interfaces/Moderadores/ConjuntoSalas';
import './MBotonSala.css';
import { useState } from 'react';

export default function MBotonSala(props){
    
    const {setvFrame}=props
    //console.log(props)
    //const [vFrame, setvFrame] = React.useState("salas");
    //const [vW, setvW] = useState();
    
    const handleClick = () => {
        console.log("Detalles de la sala----------")
        console.log(props);

        // setvFrame("detallesalas")

        // <CDetalleSala
        //     nombreSala={props.nombreSala}
        //     areaSala={props.areaSala}
        //     modalidadSala={props.modalidadSala}
        //     fechaSala={props.fechaSala}
        //     nopontentesSala={props.nopontentesSala}/>

        
        console.log("-----------------------------");
    }

    const ventana = () => {
        console.log(props)
        setvFrame("detallesalas")
        //setvNombre("Nombre sala")
        //setvFrame("detallesalas")
        //setvNombre(props.nombreSala);
    }

    // const cambiarW = () =>{
    //     console.log("cambiarW1");
    //     return (
        

        
    //     );
    // }

    return(
        <section id='sectionContenedorBS'>
            <div className='divContenedorBS'>
                <button className="btnSalaBS" onClick = {ventana}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5602/5602892.png" id="imgBotonBS" height ="40%" width="3%" alt="img_zoom" />
                    <div className='divTextoBotonBS'>
                        <p id="tituloSalaBS">{props.nombreSala}</p>
                        <p id="areaSalaBS">{props.areaSala}</p>
                        <p id="modalidadSalaBS">{props.modalidadSala}</p>
                        <p id="fechaSalaBS">{props.fechaSala}</p>
                    </div>
                </button>
            </div>            
        </section>
    );
}

