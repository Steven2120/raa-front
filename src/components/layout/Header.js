import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function MenuAppBar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  return (
    <Box sx={{ flexGrow: 1 }} position={"fixed"} width={"100%"}>
      <AppBar position="static" bgcolor="red">
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{ flexGrow: 1, "&:hover": { cursor: "pointer" } }}
            onClick={() => {
              navigate("/home");
            }}
          >
            MyMusicStore.com
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              {!user ? (
                <AccountCircle />
              ) : (
                <Avatar
                  alt={(user.firstName, " ", user.lastName)}
                  src={user.profilePicture}
                />
              )}
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <StyledBadge badgeContent={shoppingCart.items} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
