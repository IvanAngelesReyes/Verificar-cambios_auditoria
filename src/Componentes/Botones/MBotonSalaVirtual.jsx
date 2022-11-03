import * as React from 'react';
import './MBotonSalaVirtual.css';

let listaCosa = [{name:"Sala 1", area:"Area 1. Medicina y salud "}, {name:"Sala 2", area:"Area 2"}, {name:"Sala 3", area:"Area 3"}];

export default function MBotonSalaVirtual(objeto){

    const elementos = listaCosa.map((item) =>

    <section id='sectionContenedorBSV'>
        <div className='divContenedorBSV'>
            <button className="btnSalaBSV">
                {/* <div className='divImgSala'> */}
                <img src="https://cdn-icons-png.flaticon.com/512/4423/4423709.png" id="imgBotonBSV" height ="40%" width="3%" alt="img_zoom" />
                {/* </div> */}
                <div className='divTextoBotonBSV'>
                    <p id="tituloSalaBSV">{item.name}</p>
                    <p id="areaSalaBSV">{item.area}</p>
                </div>
            </button>
        </div>            
    </section>
    );

    return(
        elementos
    );
}