/*
SmartSoft
Componente: MBotonSala
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: 

Modificaciones:
    Fecha               Folio

Descripcion:
Boton mediante el que se accede a la informacion de una sala

Numero de metodos: 1
Componentes relacionados: 
*/

import React from 'react';
import CDetalleSala from '../../Interfaces/Moderadores/CDetalleSala';
import ConjuntoSalas from '../../Interfaces/Moderadores/ConjuntoSalas';
import './MBotonSala.css';

export default function MBotonSala(props){

    const {setvFrame}=props
    //console.log(props)

    const handleClick = () => {
        console.log("Detalles de la sala----------")
        console.log(props)
        //const cambiar = () =>setvFrame("detallesalas")
        //props.setvFrame("detallesalas")
        console.log("-----------------------------");
        //setvFrame("detallesalas")
        
    }

    return(
        <section id='sectionContenedorBS'>
            <div className='divContenedorBS'>
                <button onClick={()=>setvFrame("detallesalas")}>Detalles</button>
                <button className="btnSalaBS" onClick = {handleClick} >
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

