import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Gets from "../../Util/Gets";

export default function SelectArea(props) {
  
  const {vArea, setvArea} = props
  const [vAreas, setvAreas] = React.useState([]);

  const handleChange = (event) => {
    setvArea(event.target.value);
  };

  React.useEffect(() => {
    Gets.mGetAreaInteres(setvAreas);
  }, []);

  // vAreas.map((area, index) =>{ 
  //   console.log(vAreas[index].area_interes)
  // })

  return (
    <FormControl fullWidth variant="standard" sx={{m: 1, width:'70%' }}>
      <InputLabel id="inputArea">Area de interes</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="selectArea"
        value={vArea}
        onChange={handleChange}
        label="Area de interes">
        <MenuItem value=""><em>Seleccione una opcion</em></MenuItem>

        {
          vAreas.map((area, index) => (
            <MenuItem value={vAreas[index].area_interes}>{vAreas[index].area_interes}</MenuItem> 
          ))
        }  
        
      </Select>  
    </FormControl>
  );
}