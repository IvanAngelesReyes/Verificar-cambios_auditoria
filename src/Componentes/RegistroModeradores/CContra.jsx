import * as React from 'react';
import * as Mui from "@mui/material";
import * as MuiIcons from '@mui/icons-material';

export default function CContra(props){

    //console.log("PROPS DE CONTRASEÑA: "+ props)

    const {values, setValues} = props

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return(
    <Mui.Box component="formContra" sx={{'& > :not(style)': { m: 1, width: '70%' }}}>
        <div>       
            <Mui.FormControl fullWidth sx={{ m: 0}} variant="standard">
                <Mui.InputLabel htmlFor="standard-adornment-password">{props.texto}</Mui.InputLabel>
                <Mui.Input
                    id={props.id}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <Mui.InputAdornment position="end">
                            <Mui.IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <MuiIcons.VisibilityOff /> : <MuiIcons.Visibility />}
                            </Mui.IconButton>
                        </Mui.InputAdornment>
                    }
                />
            </Mui.FormControl>
        </div>
    </Mui.Box>);
}