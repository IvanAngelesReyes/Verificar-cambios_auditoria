/*
SmartSoft
Componente: MBotonSala
Fecha de creacion: 24/10/2022, Autorizó:Iván López Carranza, Revisó: Carlos Ivan Angeles Reyes

Modificaciones:
    Fecha               Folio

Descripcion:
Componente del login que tiene las universidades

Numero de metodos: 1
Componentes relacionados: Login
*/

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Gets from "../../Util/Gets";

export default function SelectInstitucion(props) {
  
  const {vInstitucion, setvInstitucion} = props
  const [vUniversidades, setvUniversidades] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value)
    setvInstitucion(event.target.value);
  };

  React.useEffect(() => {
    Gets.mGetUniversidades(setvUniversidades);
  }, []);

  // vUniversidades.map((universidad, index) =>{
  //   let nombreUniversidad = vUniversidades[index].nombre; 
  //   console.log(nombreUniversidad)
  // })
  

  return (
    // <div>
      <FormControl fullWidth variant="standard" sx={{m: 1, width:'70%' }}>
        <InputLabel id="inputInstitucion">Institucion</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="selectInstitucion"
          value={vInstitucion}
          onChange={handleChange}
          label="Institucion">

          <MenuItem value=""><em>Seleccione una opcion</em></MenuItem>

          {
            vUniversidades.map((universidad, index) => (
              <MenuItem value={vUniversidades[index].nombre}>{vUniversidades[index].nombre}</MenuItem> 
            ))
          }
          
        </Select>
      </FormControl>
    // </div>
  );
}