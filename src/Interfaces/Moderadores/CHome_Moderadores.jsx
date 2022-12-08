/*
SmartSoft
Componente: Home de moderadores
Fecha de creacion: 30/10/2022, Autorizó: Ricardo Adrian Alfaro García, Revisó: 
Modificaciones: Cambios de apis
    Fecha 01/12/2022              Folio

Descripcion:
Este componente es la ventana en donde se le muestran a los usuarios el codigo qr para unirse al grupo de whatsapp y el manual de moderadores.

Numero de metodos:
*/
import React from "react";

import * as Mui from "@mui/material";
import * as Gets from "../../Util/Gets";
import * as Box from "@mui/material/Box";
import * as Variables from "../../Global/Variables";


export default function CHome_Moderadores() {
  //const [vIsExisteManual, setVIsExisteManual] = React.useState(false);
  const [vUrlManual, setVUrlManual] = React.useState("");
  const [vWhatsapp, setVUrlWhatsapp] = React.useState("");

  React.useEffect(() => {
   // Gets.mGetManualFile(setVIsExisteManual);
   Gets.mGetManual(setVUrlManual);
   Gets.mGetURLWhatsapp(setVUrlWhatsapp);
  }, []);

  return (
    <div>
      <p>Escanea el código QR para unirte al grupo</p> 
      {vWhatsapp.length > 0 ? (
        <Mui.Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img
          src={
            "https://chart.googleapis.com/chart?cht=qr&chl=" +
            vWhatsapp +
            "&chs=250x250"
          }
          alt=""
          height="250px"
        />
      </Mui.Stack>
        ) : (           
        <p>Grupo no disponible</p>
              

        )}
      <p>Consulta el manual de moderadores</p> 
     
      {vUrlManual.length > 0 ? (
        <Mui.Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <iframe
          style={{ borderRadius: "10px", width: 500, height: 600 }}
          src={"https://api.moderadores.tecnologinc.com/backend/Manual/Manual.pdf"}
        />
      </Mui.Stack>
        ) : ( 
        <p>Manual aun no disponible</p>
        )}
         
    </div>
  );
}
