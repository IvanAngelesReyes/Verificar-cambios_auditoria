import React from "react";

import * as Mui from "@mui/material";

export default function CAcceso_Informacion(props) {
  const { mSetvFramePrincipal, vAltoNav, vAnchoNav } = props;

  

  const vBody = () => (
    <>
      <div style={{ background: "red", w: "100%" }}>holas</div>
      
    </>
  );

  if (vAnchoNav <= 600) {
    //celular
    return (
      <Mui.Paper
        elevation={1}
        sx={{
          padding: "30px",
          width: vAnchoNav - 50,
          height: vAltoNav - 50,
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {vBody()}
      </Mui.Paper>
    );
  } else {
    return (
      <Mui.Paper
        elevation={1}
        sx={{ padding: "10px", width: vAnchoNav, height: vAltoNav }}
      >
        <Mui.Grid container spacing={0}>
          <Mui.Grid xs={0}>
          </Mui.Grid>
          <Mui.Grid xs>{vBody()}</Mui.Grid>
        </Mui.Grid>
      </Mui.Paper>
    );
  }
}
