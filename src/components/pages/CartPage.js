import React from "react";
import Layout from "../layout/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart/Cartitem";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../redux-state/shoppingCartSlice";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const CartPage = () => {
  const navigate = useNavigate();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {shoppingCart.products.map((product, idx) => {
          return (
            <div key={`${idx}-${product}`}>
              {product.count > 0 && <CartItem product={product}></CartItem>}
            </div>
          );
        })}

        <Box padding={"5px"}>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => {
              dispatch(emptyCart());
            }}
          >
            Empty Cart
          </Button>
        </Box>
        <Box padding={"5px"}>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => {
              navigate("/home");
            }}
          >
            Home Page
          </Button>
        </Box>
        {/* } */}
      </Box>
    </Layout>
  );
};

export default CartPage;
