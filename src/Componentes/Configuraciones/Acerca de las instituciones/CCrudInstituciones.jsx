import React from "react";
import * as Mui from "@mui/material";
import * as Icon from "@mui/icons-material";
import * as Variables from "../../../Global/Variables";
import * as Posts from "../../../Util/Posts";
import * as Puts from "../../../Util/Puts";
import * as Deletes from "../../../Util/Deletes";

export default function CCrudInstituciones(props) {
  const { vInstituciones, setVInstituciones, setOpenAlert } = props;

  const [vChecked, setvChecked] = React.useState([]);
  const [vIsModifica, setvIsModifica] = React.useState(true);
  const [vEditNombre, setVEditNombre] = React.useState("");
  const [vEditPais, setVEditPais] = React.useState("");
  const [vAgregarNombre, setVAgregarNombre] = React.useState("");
  const [vAgregarPais, setVAgregarPais] = React.useState("");

  const handleToggle = (value) => () => {
    const currentIndex = vChecked.indexOf(value);
    const newvChecked = [...vChecked];

    if (currentIndex === -1) {
      newvChecked.push(value);
    } else {
      newvChecked.splice(currentIndex, 1);
    }
    if (newvChecked.length == 1) {
      console.log(newvChecked[0]);
      setVEditNombre(newvChecked[0].nombre);
      setVEditPais(newvChecked[0].pais);
    }

    setvChecked(newvChecked);
  };

  const mModifcarInstitucion = () => {
    setVInstituciones(
      vInstituciones.map((item) => {
        if (item._id === vChecked[0]._id) {
          item.nombre = vEditNombre;
          item.pais = vEditPais;
          vChecked[0] = item;
          Puts.mModificarInstitucion(item);
          return item;
        } else {
          return item;
        }
      })
    );
    setOpenAlert();
  };
  const handleClickAgregar = () => {
    var mAdd = (vResponse) => {
      setVInstituciones([...vInstituciones, vResponse.vUniversidades]);
      setVAgregarPais("");
      setVAgregarNombre("");
    };
    var vInstitucion = {
      nombre: vAgregarNombre,
      pais: vAgregarPais,
      __v: "",
      _id: Date.now(),
    };
    Posts.mCrearInstitucion(vInstitucion, mAdd);
    
    setOpenAlert();
  };
  const handleClickEliminar = () => {
    var vInstitucion=[]
    vChecked.forEach(item => {
      Deletes.mEliminarInstitucion(item);
      
    })
    vInstituciones.forEach(item => {
      let vIsEncontrado=false
      vChecked.forEach((item2) => {
        if (item._id === item2._id) {
          vIsEncontrado = true
          return;
        }
      });
      if (!vIsEncontrado) {
        vInstitucion.push(item);
      }
    })
    setVInstituciones(vInstitucion);
    setvChecked([]);
    setOpenAlert();
  };

  const mMuetsraInstituciones = (vInstitucionesT) => {
    return (
      <>
        <Mui.List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {vInstitucionesT.map((value) => {
            const labelId = Date.now();
            return (
              <Mui.ListItem
                key={value}
                secondaryAction={
                  <Mui.Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    vChecked={vChecked.indexOf(value) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                }
                disablePadding
              >
                <Mui.ListItemButton>
                  <Mui.ListItemText id={labelId} primary={value.nombre} />
                </Mui.ListItemButton>
              </Mui.ListItem>
            );
          })}
        </Mui.List>
      </>
    );
  };

  const mAgregarInstitucion = () => {
    return (
      <Mui.Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        columns={3}
        sx={{ width: "100%" }}
      >
        <Mui.Grid
          item
          xs
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label={Variables.v_TEXTOS.crudinstituciones.text1}
            variant="outlined"
            value={vAgregarNombre}
            onChange={(evt) => setVAgregarNombre(evt.target.value)}
          />
        </Mui.Grid>
        <Mui.Grid
          item
          xs
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.TextField
            id="outlined-basic"
            label={Variables.v_TEXTOS.crudinstituciones.text2}
            variant="outlined"
            sx={{ width: "100%" }}
            value={vAgregarPais}
            onChange={(evt) => setVAgregarPais(evt.target.value)}
          />
        </Mui.Grid>
        <Mui.Grid
          item
          xs={1}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.Button
            disabled={vAgregarNombre.length > 0 && vAgregarPais.length>0?false:true}
            onClick={handleClickAgregar}
            variant="contained"
          >
            {Variables.v_TEXTOS.crudinstituciones.btnAgregar}
          </Mui.Button>
        </Mui.Grid>
      </Mui.Grid>
    );
  };
  const mModificarInstitucion = () => {
    return (
      <Mui.Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        columns={3}
        sx={{ width: "100%" }}
      >
        <Mui.Grid
          item
          xs
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label={Variables.v_TEXTOS.crudinstituciones.text1}
            variant="outlined"
            value={vEditNombre}
            onChange={(evt) => setVEditNombre(evt.target.value)}
          />
        </Mui.Grid>
        <Mui.Grid
          item
          xs
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.TextField
            id="outlined-basic"
            label={Variables.v_TEXTOS.crudinstituciones.text2}
            variant="outlined"
            sx={{ width: "100%" }}
            value={vEditPais}
            onChange={(evt) => setVEditPais(evt.target.value)}
          />
        </Mui.Grid>
        <Mui.Grid
          item
          xs={1}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Mui.Button
            disabled={
              vEditNombre.length > 0 && vEditPais.length > 0 ? false : true
            }
            onClick={mModifcarInstitucion}
            variant="contained"
          >
            {Variables.v_TEXTOS.crudinstituciones.btnModicar}
          </Mui.Button>
        </Mui.Grid>
      </Mui.Grid>
    );
  };

  return (
    <Mui.Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      divider={<Mui.Divider orientation="horizontal" flexItem />}
    >
      <>
        <div>{Variables.v_TEXTOS.crudinstituciones.agregar}</div>
        {mAgregarInstitucion()}
      </>
      {vIsModifica && vChecked.length === 1 && (
        <>
          <div>{Variables.v_TEXTOS.crudinstituciones.modificar}</div>
          {mModificarInstitucion()}
        </>
      )}
      <>
        <div>{Variables.v_TEXTOS.crudinstituciones.mostrar}</div>
        <Mui.Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0}
          sx={{ width: "100%" }}
        >
          {vChecked.length > 0 && (
            <Mui.IconButton onClick={handleClickEliminar} aria-label="delete">
              <Icon.Delete />
            </Mui.IconButton>
          )}
        </Mui.Stack>
        {mMuetsraInstituciones(vInstituciones)}
      </>
    </Mui.Stack>
  );
}
