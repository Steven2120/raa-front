import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import UserName from "../textfield/UserName";
import Password from "../textfield/Password";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { sampleUserData } from "../../mockData";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../../redux-state/userSlice";
import Axios from "../../utils/Axios";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userRegForm, setUserRegForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!user) {
        // call back end with credentials data
        const response = await Axios.post("/sign-in", {
          credentials: userRegForm,
        });

        //insert the response user into the state
        const fetchedUser = response.data.user;
        dispatch(signIn(fetchedUser));
        setError("");
        navigate("/");
      } else {
        await Axios.get("/sign-out");
        dispatch(signOut());
        setError("");
      }
    } catch (e) {
      setError(e.message);
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
          {!user && (
            <>
              <UserName
                userRegForm={userRegForm}
                setUserRegForm={setUserRegForm}
              ></UserName>
              <Password
                userRegForm={userRegForm}
                setUserRegForm={setUserRegForm}
              ></Password>
            </>
          )}
          <Button variant="outlined" type="form">
            {!user ? "Log In" : "Log Out"}
          </Button>
          {!user && (
            <Box sx={{ margin: "5%" }}>
              <Typography
                sx={{ color: "teal" }}
                onClick={() => {
                  navigate("/register-user");
                }}
              >
                Create Account
              </Typography>
            </Box>
          )}
          <Box sx={{ margin: "3%" }}>
            <Typography sx={{ color: "red" }}>{error}</Typography>
          </Box>
        </Box>
      </form>
    </Layout>
  );
};

export default SignIn;
