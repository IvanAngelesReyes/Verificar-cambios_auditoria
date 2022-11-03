import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInstitucion(props) {
  
  const {vInstitucion, setvInstitucion} = props

  // const [vInstitucion, setvInstitucion] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setvInstitucion(event.target.value);
  };

  return (
    // <div>
      <FormControl fullWidth variant="standard" sx={{m: 1, width:'70%' }}>
        <InputLabel id="inputInstitucion">Institucion</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="selectInstitucion"
          value={vInstitucion}
          onChange={handleChange}
          label="Institucion"
        >
          <MenuItem value="">
            <em>Seleccione una opcion</em>
          </MenuItem>
          <MenuItem value={"Universidad Autonoma del Estado de Mexico"}>Universidad Autonoma del Estado de Mexico</MenuItem>
          <MenuItem value={"Tecnologico de Mexico"}>Tecnologico de Mexico</MenuItem>
          <MenuItem value={"Universidad Nacional Autonoma de Mexico"}>Universidad Nacional Autonoma de Mexico</MenuItem>
        </Select>
      </FormControl>
    // </div>
  );
}