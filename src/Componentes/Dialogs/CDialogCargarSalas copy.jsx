/*
SmartSoft
Componente: CDialogCargarSalas
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 0
Componentes relacionados: 
*/

import React from "react";

import * as Mui from "@mui/material";
import * as Variables from "../../Global/Variables";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Mui.Slide direction="up" ref={ref} {...props} />;
});

export default function CDialogCargarSalas(props) {
  const { vAltoNav, setvSalasCargadas, vAccion } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);

  const [vColumnas, setvColumnas] = React.useState([]);
  const [vFilas, setvFilas] = React.useState([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    pageSize: number,
    details: GridCallbackDetails
  ) => {
    setRowsPerPage(pageSize);
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setvColumnas([]);
    setvFilas([]);
    setOpen(false);
  };
  const handleCloseAsignar = () => {
    setvSalasCargadas(vFilas);
    handleClose();
  };

  const csvFileToArray = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const vTextCSVTmp = e.target.result;
      const vTextCSV = vTextCSVTmp.replace("#", "Id");
      const csvHeader = vTextCSV.slice(0, vTextCSV.indexOf("\n")).split(",");
      csvHeader.push("Estatus");
      
      //const csvHeader = csvHeadertmp.concat(",", "id").split(",");
      const csvRows = vTextCSV.slice(vTextCSV.indexOf("\n") + 1).split("\n");

      const vFilasTabla = csvRows.map((i, vIndex) => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
          switch (header.replace(" ", "").replace("\r", "").toLowerCase()) {
            case "#":
              object["id"] = vIndex;
              break;
            case "moderador":
            case "correo":
            case "sexo":
            case "celular":
              object[header.replace(" ", "").replace("\r", "").toLowerCase()] =
                "";
              break;
            case "estatus":
              object[header.replace(" ", "").replace("\r", "").toLowerCase()] =
                "Inactiva";
              break;
            default:
              object[header.replace(" ", "").replace("\r", "").toLowerCase()] =
                values[index].replace("\r", "");
              break;
          }
          return object;
        }, {});
        return obj;
      });

      //Crear datos de tabla
      let vColumnasTmp = [];
      csvHeader.forEach((item) => {
        let vColumna = {
          field: item.replace(" ", "").replace("\r", "").toLowerCase(),
          headerName: item.replace("\r", ""),
          width: 150,
        };
        vColumnasTmp.push(vColumna);
      });
      setvColumnas(vColumnasTmp);
      setvFilas(vFilasTabla);
    };
    reader.readAsText(e.target.files[0]);
  };

  const mDataTable = () => {
    return (
      <div style={{ height: vAltoNav - 130, width: "100%" }}>
        <DataGrid
          rows={vFilas}
          columns={vColumnas}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, vFilas.length]}
          onPageSizeChange={handleChangeRowsPerPage}
          checkboxSelection
        />
      </div>
    );
  };

  return (
    <>
      <Mui.Button sx={{w:"150px"}} variant="contained" onClick={handleClickOpen}>
        {Variables.v_TEXTOS.cargar_salas}
      </Mui.Button>

      <Mui.Dialog
        fullScreen
        TransitionComponent={Transition}
        onClose={handleClose}
        open={open}
      >
        <Mui.Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Mui.DialogTitle>{Variables.v_TEXTOS.cargar_salas}</Mui.DialogTitle>
        </Mui.Stack>
        <Mui.Stack spacing={2}>
          <Mui.Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Mui.Button
              variant="contained"
              onClick={handleClickOpen}
              component="label"
              size="small"
            >
              {Variables.v_TEXTOS.cargar_csv}
              <input
                hidden
                accept=".csv"
                type="file"
                onChange={(e) => csvFileToArray(e)}
              />
            </Mui.Button>
          </Mui.Stack>
          {mDataTable()}
          <Mui.Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Mui.Button size="small" variant="contained" onClick={handleClose}>
              {Variables.v_TEXTOS.salir}
            </Mui.Button>
            <Mui.Button
              size="small"
              diable
              variant="contained"
              onClick={handleCloseAsignar}
            >
              {Variables.v_TEXTOS.cargar}
            </Mui.Button>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Dialog>
    </>
  );
}
