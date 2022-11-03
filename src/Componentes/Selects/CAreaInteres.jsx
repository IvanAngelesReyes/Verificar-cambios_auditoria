import React, {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Axios from 'axios'

export default function SelectArea(props) {
  
  const {vArea, setvArea} = props

  const handleChange = (event) => {
    setvArea(event.target.value);
  };

  return (
    // <div>
      <FormControl fullWidth variant="standard" sx={{m: 1, width:'70%' }}>
        <InputLabel id="inputArea">Area de interes</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="selectArea"
          value={vArea}
          onChange={handleChange}
          label="Area de interes"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Area 1"}>Area 1</MenuItem>
          <MenuItem value={"Area 2"}>Area 2</MenuItem>
          <MenuItem value={"Area 3"}>Area 3</MenuItem>
          
        </Select>
        
      </FormControl>
    // </div> 
  );
}