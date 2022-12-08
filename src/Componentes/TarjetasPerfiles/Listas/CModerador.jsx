/*
SmartSoft
Componente: CModerador
Fecha de creacion: 26/10/2022, Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../../Global/Variables";
import DialogPerfilConsulta from "../../Dialogs/CDialogPerfilConsulta";



export default function CModerador(props) {
  const {
    vRegistro, 
    setVRegistrosModeradores,
    vRegistrosModeradores, 
    mRefresaacarPantalla} = props;

  return (
    <Mui.Paper elevation={3}>
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1100,
          },
        }}
      >
        <Mui.Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          align = "center"
        >
          <Mui.TextField
            label={Variables.v_TEXTOS.nombre}
            //defaultValue="Alejandra"
            defaultValue={vRegistro.nombre}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            label={Variables.v_TEXTOS.institucion}
            //defaultValue="UAEMEX"
            defaultValue={vRegistro.institucion}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <Mui.TextField
            label={Variables.v_TEXTOS.rol}
            //defaultValue="Moderador"
            defaultValue={vRegistro.consejero===true?"Consejero":"Moderador"}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
            <DialogPerfilConsulta mRefresaacarPantalla={mRefresaacarPantalla} setVRegistrosModeradores={setVRegistrosModeradores} vRegistrosModeradores={vRegistrosModeradores} vRegistro={vRegistro}/>
        </Mui.Grid>
      </Mui.Box>
    </Mui.Paper>
  );
}
