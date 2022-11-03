/*
SmartSoft
Componente: MBotonSala
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: 

Modificaciones:
    Fecha               Folio

Descripcion:
Boton mediante el que se accede a la informacion de una sala, por ahora este es el componente de sala virtual

Numero de metodos: 1
Componentes relacionados: 
*/

import * as React from 'react';
import './MBotonSala.css';

let listaCosa = [{name:"Sala 1", area:"Area 1. Medicina y salud "}, {name:"Sala 2", area:"Area 2"}, {name:"Sala 3", area:"Area 3"}];

export default function MBotonSala(objeto){

    const elementos = listaCosa.map((item) =>

    <section id='sectionContenedorBS'>
            <div className='divContenedorBS'>
                <button className="btnSalaBS">
                    {/* <div className='divImgSala'> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/5602/5602892.png" id="imgBotonBS" height ="40%" width="3%" alt="img_zoom" />
                    {/* </div> */}
                    <div className='divTextoBotonBS'>
                        <p id="tituloSalaBS">{item.name}</p>
                        <p id="areaSalaBS">{item.area}</p>
                    </div>
                </button>
            </div>            
        </section>
    );

    return(
        elementos
    );
}