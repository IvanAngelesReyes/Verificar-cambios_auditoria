import React from "react";
import * as Mui from "@mui/material";
import * as Variables from "../../../Global/Variables";
import * as Posts from "../../../Util/Posts";

export default function CDatosEvento(props) {
  const { vIsExisteManual, setOpenAlert, vIsExistePlantilla } = props;

  const [vManual, setVManual] = React.useState({
    url: vIsExisteManual
      ? Variables.v_URL_API + "/backend/Manual/Manual.pdf"
      : "",
    file: "",
  });
  const [vPantilla, setVPantilla] = React.useState({
    url: vIsExistePlantilla
      ? Variables.v_URL_API + "/backend/Manual/Manual.pdf"
      : "",
    file: "",
  });
  const [vTextoQr, setVTextoQr] = React.useState("");

  const mGetManual = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e1) => {
      console.log(e1.target);
      setVManual({ url: e1.target.result, file: e.target.files[0] });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const mGetPlantilla = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e1) => {
      console.log(e1.target);
      setVPantilla({ url: e1.target.result, file: e.target.files[0] });
      Posts.mCrearPlantilla(e.target.files[0]);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const mObtenerProgreso = (e) => {
    console.log(e);
  };

  const enviarManual = () => {
    setOpenAlert();
    Posts.mGuardarManual(vManual.file, mObtenerProgreso);
  };

  return (
    <>
      <Mui.Divider />
      <>
        <Mui.Typography>
          {Variables.v_TEXTOS.configuraciones.conf1.text2}
        </Mui.Typography>
        <Mui.TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ marginTop: "15px", width: "100%" }}
          onChange={(e) => setVTextoQr(e.target.value)}
          value={vTextoQr}
        />
        <Mui.Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img
            src={
              "https://chart.googleapis.com/chart?cht=qr&chl=" +
              vTextoQr +
              "&chs=250x250"
            }
            alt=""
            height="250px"
          />
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Mui.Button variant="contained" onClick={() => setOpenAlert()}>
            {Variables.v_TEXTOS.guardar}
          </Mui.Button>
        </Mui.Stack>
      </>

      <Mui.Divider />
      <>
        <Mui.Typography>
          {Variables.v_TEXTOS.configuraciones.conf1.text3}
        </Mui.Typography>
        <Mui.Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Mui.Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Mui.Button component="label" size="small">
              <input
                hidden
                onChange={(e) => mGetManual(e)}
                accept="application/pdf"
                type="file"
              />
              {vManual.url.length > 0
                ? Variables.v_TEXTOS.configuraciones.conf1.text5
                : Variables.v_TEXTOS.configuraciones.conf1.text4}
            </Mui.Button>
            {vManual.url.length > 0 ? (
              <>
                <iframe
                  style={{ borderRadius: "10px", width: 500, height: 600 }}
                  src={vManual.url}
                />
                {/*<Mui.Button
                  size="small"
                  onClick={() =>
                    window.open(
                      Variables.v_URL_API + "/backend/Manual/Manual.pdf",
                      "Manual de moderación",
                      "width=500, height=600"
                    )
                  }
                >
                  {Variables.v_TEXTOS.configuraciones.conf1.text6}
                </Mui.Button> */}
              </>
            ) : (
              <Mui.Box
                sx={{
                  width: 500,
                  height: 600,
                  borderRadius: "10px",
                  border: "solid #e5e5e5 1px",
                }}
              >
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Mui.Typography variant="body2" component="div">
                    {Variables.v_TEXTOS.configuraciones.conf1.no_manual}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Box>
            )}
          </Mui.Stack>
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Mui.Button
            disabled={!(vManual.file.length !== 0)}
            variant="contained"
            onClick={() => enviarManual()}
          >
            {Variables.v_TEXTOS.guardar}
          </Mui.Button>
        </Mui.Stack>
      </>

      <Mui.Divider />
      <>
        <Mui.Typography>
          {Variables.v_TEXTOS.configuraciones.conf1.text7}
        </Mui.Typography>
        <Mui.Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Mui.Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Mui.Button component="label" size="small">
              <input
                hidden
                onChange={(e) => mGetPlantilla(e)}
                accept="application/msword,.doc, .docx"
                type="file"
              />
              {vPantilla.url.length > 0
                ? Variables.v_TEXTOS.configuraciones.conf1.text9
                : Variables.v_TEXTOS.configuraciones.conf1.text8}
            </Mui.Button>
            {vPantilla.url.length > 0 ? (
              <>
                {/*<iframe
                  style={{ borderRadius: "10px", width: 500, height: 600 }}
                  src={vPantilla.url}
                /> */}
              </>
            ) : (
              <Mui.Box
                sx={{
                  width: 500,
                  height: 600,
                  borderRadius: "10px",
                  border: "solid #e5e5e5 1px",
                }}
              >
                <Mui.Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Mui.Typography variant="body2" component="div">
                    {Variables.v_TEXTOS.configuraciones.conf1.no_plantilla}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Box>
            )}
          </Mui.Stack>
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Mui.Button variant="contained" onClick={() => enviarManual()}>
            {Variables.v_TEXTOS.guardar}
          </Mui.Button>
        </Mui.Stack>
      </>
      <Mui.Divider />
    </>
  );
}
