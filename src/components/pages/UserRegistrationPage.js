import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "../../utils/Axios";

import { signIn } from "../../redux-state/userSlice";

import Layout from "../layout/Layout";
import UserName from "../textfield/UserName";
import Password from "../textfield/Password";

const UserRegistrationPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRegForm, setUserRegForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleSubmit = async (event) => {
    // make sure our form is correct ... validation ... mui
    event.preventDefault();

    try {
      // if everything is valid in the form, submit the network request
      const response = await Axios.post("/register-user", {
        ...userRegForm,
      });

      // recieve user information from server and put it in the state
      const { user } = response.data;
      dispatch(signIn(user));
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e.message);
      // use for error handling func
      //   setError(e.response.data);
    }
  };

  return (
    <Layout>
      <form action="submit" onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"70vh"}
        >
          <UserName
            userRegForm={userRegForm}
            setUserRegForm={setUserRegForm}
          ></UserName>
          <Password
            userRegForm={userRegForm}
            setUserRegForm={setUserRegForm}
          ></Password>
          <TextField
            sx={{ margin: "3%" }}
            id="outlined-basic-firstName"
            label="First Name"
            variant="outlined"
            onChange={(e) => {
              setUserRegForm({ ...userRegForm, firstName: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: "3%" }}
            id="outlined-basic-lastName"
            label="Last Name"
            variant="outlined"
            onChange={(e) => {
              setUserRegForm({ ...userRegForm, lastName: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: "3%" }}
            id="outlined-basic-profilePic"
            label="Profile Picture"
            variant="outlined"
            onChange={(e) => {
              setUserRegForm({
                ...userRegForm,
                profilePicture: e.target.value,
              });
            }}
            required
          />
          <Button variant="outlined" type="form">
            Submit
          </Button>
          <Box sx={{ margin: "5%" }}>
            <Typography sx={{ color: "red" }}>{error}</Typography>
          </Box>
        </Box>
      </form>
    </Layout>
  );
};

export default UserRegistrationPage;
