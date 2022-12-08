import React from "react";
import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";
import * as Icon from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Mui.Slide direction="up" ref={ref} {...props} />;
});

export default function CDialogDetallesSala(props) {
  const { vSala } = props;
  const [open, setOpen] = React.useState(false);

  const vDetalles_Sala = Variables.v_TEXTOS.detalles_sala;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      <Mui.Button variant="outlined" onClick={handleClickOpen}>
        {Variables.v_TEXTOS.btn_detalles_sala}
      </Mui.Button>
      <Mui.Dialog
        onClose={handleClose}
        open={open}
        fullScreen
        TransitionComponent={Transition}
      >
        <Mui.DialogContent>
          <Mui.DialogTitle>
            <Mui.Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              {vDetalles_Sala.titulo}
              <Mui.IconButton onClick={() => handleClose()} aria-label="delete">
                <Icon.Close />
              </Mui.IconButton>
            </Mui.Stack>
          </Mui.DialogTitle>
          <Mui.Stack
            direction="column"
            divider={<Mui.Divider orientation="horizontal" flexItem />}
            spacing={1}
          >
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto14}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.linea}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto4}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.pais}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto3}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.sede}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto5}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.area}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto12}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.instituciones}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto1}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.ubicacion}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto2}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.salon}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto13}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.investigador}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto7}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.compartido}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto17}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.no_ponentes}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto10}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.id_pons}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto18}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.ponentes}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto6}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.fecha}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto8}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.dia}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto19}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.turno}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto9}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.estado.toUpperCase()}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto16}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.moderador}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto11}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.id_tra}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto15}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.modalidad}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="div"
              >
                {vDetalles_Sala.texto20}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.url}
              </Mui.Typography>
            </>
          </Mui.Stack>
        </Mui.DialogContent>
      </Mui.Dialog>
    </>
  );
}
