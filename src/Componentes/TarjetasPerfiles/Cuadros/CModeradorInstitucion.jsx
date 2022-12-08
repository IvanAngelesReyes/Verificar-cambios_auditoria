/*
SmartSoft
Componente: CModerador
Fecha de creacion: 26/10/2022, Autorizó: Alejandra Patricia Chaparro Matias

Modificaciones:
    Fecha               Folio

Descripcion:


Numero de metodos: 0
Componentes relacionados: ninguno
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../../Global/Variables";
import DialogPerfilConsulta from "../../Dialogs/CDialogPerfilConsultaInstitucion";



export default function CModerador(props) {

  const {
    vRegistro, 
    setVRegistrosModeradores,
    vRegistrosModeradores, 
    mRefresaacarPantalla} = props;

  return (
    <Mui.Paper sx={{m:1}} elevation={3}
    >
      <Mui.Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 256,
            height: 350,
          },
        }}
      >
          <Mui.Stack
            container
            spacing={2} 
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            
            <Mui.TextField
              label={Variables.v_TEXTOS.nombre}
              defaultValue={vRegistro.nombre}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <Mui.TextField
              label={Variables.v_TEXTOS.institucion}
              defaultValue={vRegistro.institucion}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <Mui.TextField
              label={Variables.v_TEXTOS.rol}
              defaultValue={vRegistro.consejero===true?"Consejero":"Moderador"}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <DialogPerfilConsulta mRefresaacarPantalla={mRefresaacarPantalla} setVRegistrosModeradores={setVRegistrosModeradores} vRegistrosModeradores={vRegistrosModeradores} vRegistro={vRegistro}/>
          </Mui.Stack>
      </Mui.Box>
    </Mui.Paper>
  );
}