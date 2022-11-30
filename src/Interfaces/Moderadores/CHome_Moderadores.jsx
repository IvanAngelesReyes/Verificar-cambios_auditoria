/*
SmartSoft
Componente: Home de moderadores
Fecha de creacion: 30/10/2022, Autorizó: Ricardo Adrian Alfaro García, Revisó: 
Modificaciones:
    Fecha               Folio

Descripcion:
Este componente es la ventana en donde se le muestran la informacion de cintacto a los usuarios y sus reconocimientos.

Numero de metodos: 
Componentes relacionados: CDialogGrupodeWhatsapp
*/
import React from "react";

import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as Variables from "../../Global/Variables";
import * as Gets from "../../Util/Gets";


export default function CHome_Moderadores() {
  const [vManual, setVManual] = React.useState("");
  const [vWhatsapp, setVWhatsapp] = React.useState("");
  React.useEffect(() => {
    Gets.mGetManual(setVManual);
    Gets.mGetURLWhatsapp(setVWhatsapp);
  }, []);
  return (
    <div>
      {vWhatsapp.length > 0 ? (
        <img
        src={
          "https://chart.googleapis.com/chart?cht=qr&chl=" +
          vWhatsapp +
          "&chs=250x250"
        }
        alt=""
        height="250px"
      />
        ) : ( 
        <p>Grupo aun no disponible</p>
        )}
     
      {vManual.length > 0 ? (
        <iframe
          style={{ borderRadius: "10px", width: 500, height: 600 }}
          src={vManual}
        />
        ) : ( 
        <p>Manual aun no disponible</p>
        )}
         
    </div>
  );
}
