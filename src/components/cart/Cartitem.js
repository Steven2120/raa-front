import React from "react";
import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteItemFromCart,
  removeFromCart,
} from "../../redux-state/shoppingCartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Box
      mb={2}
      sx={{ border: "solid 2px grey", borderRadius: "16px" }}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"spaceBetween"}
      padding="10px"
      width={"80vw"}
    >
      <Box padding="10px">
        <img src={product.image} width={"50vw"}></img>
      </Box>
      <Box display={"flex"} flexDirection={"column"} padding="5px">
        <Box padding={"5px"}>
          <div>{product.title}</div>
        </Box>
        <div>${product.total}</div>
      </Box>
      <Box
        padding={"5px"}
        display={"flex"}
        justifyContent={"end"}
        flexGrow={1}
        alignItems={"center"}
      >
        <Box padding={"5px"}>x{product.count}</Box>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              dispatch(removeFromCart(product));
            }}
          >
            -
          </Button>
        </ButtonGroup>
        <DeleteForeverIcon
          sx={{ paddingLeft: "10%" }}
          onClick={() => {
            dispatch(deleteItemFromCart(product));
          }}
        ></DeleteForeverIcon>
      </Box>
    </Box>
  );
};

export default CartItem;
