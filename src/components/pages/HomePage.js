import { Box } from "@mui/material";
import { productList } from "../../mockData";
import Layout from "../layout/Layout";
import ProductDisplay from "../home/ProductDisplay";

function HomePage() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product, idx) => (
          <Box key={`${idx}-${product}`} mb={6} bgcolor="pink">
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
