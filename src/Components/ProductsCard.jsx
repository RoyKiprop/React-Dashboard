import Card from "./Card";
import { Inventory } from "@mui/icons-material";
import UseProducts from "../customHooks/UseProducts";
function ProductsCard() {
  const[, products] = UseProducts()
  return (
    <>
      <Card>
        
          <Inventory />
          <h2>PRODUCTS</h2>
          <p>{products.length}</p>
        
      </Card>
    </>
  );
}

export default ProductsCard;
