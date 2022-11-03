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
import * as Posts from "../../Util/Posts";
import * as Metodos from "../../Global/Metodos";

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
  const { vAltoNav, mCargarSalas, vAccion } = props;
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
    mCargarSalas(vFilas);
    Metodos.chunckArrayInGroups(
      [...vFilas],
      vFilas.length
      ).map(items=>{
        Posts.mAgregarSalas(items);
        
    })
    /*vFilas.map((item) => {
      Posts.mAgregarSalas(item);
    }); */
    handleClose();
  };

  const csvFileToArray = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      var vErroresEncontrados = [];

      const vTextCSVTmp = e.target.result;
      //console.log(vTextCSVTmp);
      const csvHeader = vTextCSVTmp
        .slice(0, vTextCSVTmp.indexOf("\n"))
        .split(",");
      csvHeader[0] = "ID";
      //console.log(csvHeader);
      csvHeader.push("Modalidad");
      csvHeader.push("Estatus");

      const csvRows = vTextCSVTmp
        .slice(vTextCSVTmp.indexOf("\n") + 1)
        .split("\n");
      //csvRows.pop()

      const vFilasTabla = csvRows.map((i, vIndex) => {
        const values = i.split(",");
        console.log(vIndex, i);
        console.log(values);

        const regexInit = '^"';
        const regexFinal = '"$';
        const regexF = /"+$/i;
        let vCont = 0;
        let vFinalizar = false;
        let vIndexTmp = 0;

        try {
          const obj = csvHeader.reduce((object, header, index) => {
            let vHeaderI = header
              .replace(" ", "")
              .replace("\r", "")
              .toLowerCase();
            switch (vHeaderI) {
              case "":
                object["id"] = values[index + vCont];
                break;
              case "moderador":
              case "correo":
              case "sexo":
              case "celular":
                object[vHeaderI] = "";
                break;
              case "modalidad":
                object[vHeaderI] = "Presencial";
                break;
              case "estatus":
                object[vHeaderI] = "Inactiva";
                break;
              default:
                /*console.log(
                  index + vCont,
                  values[index + vCont],
                  typeof values[index + vCont]
                );*/
                //console.log(index + vCont)
                try {
                  if (values[index + vCont].search(regexInit) > -1) {
                    let vContenidoFila = values[index + vCont];
                    if (regexF.test(values[index + vCont])) {
                      object[vHeaderI] = vContenidoFila;
                    } else {
                      vIndexTmp = index + vCont + 1;
                      while (!vFinalizar) {
                        if (values[vIndexTmp].search(regexFinal) > -1) {
                          vCont += 1;
                          vContenidoFila += ", " + values[vIndexTmp];
                          vFinalizar = true;
                        } else {
                          vContenidoFila += ", " + values[vIndexTmp];
                          vCont += 1;
                          vIndexTmp += 1;
                        }
                      }
                      vFinalizar = false;
                      object[vHeaderI] = vContenidoFila;
                    }
                  } else {
                    object[vHeaderI] = values[index + vCont];
                  }
                } catch (error) {
                  //console.log(values[0],vHeaderI,values[index + vCont])
                  object[vHeaderI] = "";
                  vErroresEncontrados.push({
                    IdFila: values[0],
                    header: vHeaderI,
                  });
                }
                break;
            }
            return object;
          }, {});
          return obj;
        } catch (error) {
          console.log("Error :o", error);
        }
      });

      console.table(vErroresEncontrados);

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
      <Mui.Button
        sx={{ w: "150px" }}
        variant="contained"
        onClick={handleClickOpen}
      >
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
