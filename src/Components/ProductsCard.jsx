import Card from "./Card";

import UseProducts from "../customHooks/UseProducts";
import analyticsImage from "../assets/analyticsImage.png";

function ProductsCard() {
  const [, products] = UseProducts();
  return (
    <>
      <Card className="flex justify-between items-center w-full bg-[#2a263d] rounded-lg text-[#9490a7] p-3">
        <div className="flex flex-col space-y-2">
         
          <h2>Products</h2>
          <p className="text-white">{products.length}</p>
        </div>
        <div className="relative inline-block">
          <img src={analyticsImage} className="max-w-24 w-full" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
            20%
          </span>
        </div>
      </Card>
    </>
  );
}

export default ProductsCard;
