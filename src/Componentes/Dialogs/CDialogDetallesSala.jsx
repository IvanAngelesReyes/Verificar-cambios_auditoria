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
                {vDetalles_Sala.texto1}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.sala}
              </Mui.Typography>
            </>
            <>
              <Mui.Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                component="b"
              >
                {vDetalles_Sala.texto2}
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
                {vDetalles_Sala.texto3}
              </Mui.Typography>
              <Mui.Typography variant="body2" component="div">
                {vSala.institución}
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
                {vSala.país}
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
                {vSala.área}
              </Mui.Typography>
            </>
          </Mui.Stack>
        </Mui.DialogContent>
      </Mui.Dialog>
    </>
  );
}
