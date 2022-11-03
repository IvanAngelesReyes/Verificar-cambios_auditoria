import React from "react";
import './CCEventos.css';
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
//
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

//

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
//
export default function CHome_Moderadores() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ubibotmenu">
      <div>
        <div className="titulo">
        <h1 style={{color: "#005289"}}>Configuracion de eventos</h1>
        </div>
        <Grid container spacing={16}
        justifyContent="center"
        alignItems="center">
          <Grid item xs={16} md={2}>
            <Button variant="contained" onClick={handleClickOpen}>
            <div>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align = "center" >
                    Configuracion de Grupo de WhatsApp
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Mui.Stack direction="column" spacing={2}>
                    <Typography gutterBottom>
                    Carlos Quiroz Gonzalez
                    </Typography>
                    </Mui.Stack>
                    <Typography gutterBottom>
                      7228964383
                    </Typography>
                    <Mui.TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Nombre"
                      type="name"
                      fullWidth
                      variant="standard"
                    />
                    <Mui.TextField
                      autoFocus
                      margin="dense"
                      id="cel"
                      label="Telefono celular"
                      type="cel"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Editar
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                      Actualizar
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>
              <Mui.Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Icon.WhatsApp />
                  Grupo de WhatsApp 
              </Mui.Stack>
            </Button>
          </Grid>
          <Grid item xs={16} md={2}>
            <Button variant="contained" onClick={handleClickOpen}>
            <div>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} align = "center" >
                    Configuracion de Correo Electronico
                  </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <Mui.Stack direction="column" spacing={2}>
                      <Typography>
                      Carlos Quiroz Gonzalez
                      </Typography>
                      </Mui.Stack>
                      <Typography >
                        quirozzap34@gmail.com
                      </Typography>
                      <Mui.TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nombre"
                        type="name"
                        fullWidth
                        variant="standard"
                      />
                      <Mui.TextField
                        autoFocus
                        margin="dense"
                        id="correo"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Editar
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                      Actualizar
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>
              <Mui.Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Icon.Email />
                Correo electronico
              </Mui.Stack>
            </Button>
          </Grid>
          <Grid item xs={16} md={2}>
            <Button variant="contained" >

              <Mui.Stack 
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Icon.Article/>
                Manual de coordinador
              </Mui.Stack>
            </Button>
          </Grid>
        </Grid>
        <div>

        </div>
          <div className="envicorreo">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Enviar certificado
              </Button>
            </Stack>
          </div>
        </div>
    </div>
  );
}
