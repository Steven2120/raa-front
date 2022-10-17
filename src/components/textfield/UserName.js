import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UserName = ({ userRegForm, setUserRegForm }) => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "3%",
      }}
    >
      <TextField
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        // sx={{ width: '50vw' }}
        onChange={(e) => {
          const email = e.target.value;
          setUserRegForm({ ...userRegForm, email: email });
        }}
        required
      />
    </Box>
  );
};

export default UserName;
