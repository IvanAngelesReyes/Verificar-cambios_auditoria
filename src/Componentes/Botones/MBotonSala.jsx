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

import React from 'react';
import './MBotonSala.css';
import * as Gets from "../../Util/Gets";

export default function MBotonSala(){

    const [vSalas, setvSalas] = React.useState([]);

    React.useEffect(() => {
        Gets.mGetSalas(setvSalas);
      }, []);

    vSalas.map((sala, index) =>{
        console.log(vSalas)
    })

    const handleClick = () => {
        console.log("Obteniendo detalles de la sala")
      }

    const elementos = vSalas.map((sala,index) =>

        <section id='sectionContenedorBS'>
            <div className='divContenedorBS'>
                <button className="btnSalaBS" onClick={()=>(handleClick)}>
                    {/* <div className='divImgSala'> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/5602/5602892.png" id="imgBotonBS" height ="40%" width="3%" alt="img_zoom" />
                    {/* </div> */}
                    <div className='divTextoBotonBS'>
                        <p id="tituloSalaBS">{vSalas[index].titulo}</p>
                        <p id="areaSalaBS">{vSalas[index].area}</p>
                    </div>
                </button>
            </div>            
        </section>
    );

    return(
        elementos
    );
}