import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Password({ userRegForm, setUserRegForm }) {
  const [passwordText, setPasswordText] = useState({ password: "" });

  const handleChange = (prop) => (event) => {
    setPasswordText({ ...passwordText, [prop]: event.target.value });
    setUserRegForm({ ...userRegForm, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswordText({
      ...passwordText,
      showPassword: !passwordText.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", margin: "3%" }}>
      <div>
        <FormControl
          variant="outlined"
          // sx={{ width: '30vw' }}
          required
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={passwordText.showPassword ? "text" : "password"}
            value={passwordText.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordText.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
    </Box>
  );
}
