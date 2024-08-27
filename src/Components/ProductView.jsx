import UseProducts from "../customHooks/UseProducts";
import Card from "./Card";
import { UseSelected } from "./context/SelectedTableItem";

function ProductView() {
  const [, products] = UseProducts();
  const { itemId } = UseSelected();
  const product = products.find((product) => product.Id === itemId);
  return (
    <div className=" bg-[#2a263d] p-8 mr-6 rounded-xl">
      <Card>
        <div className="flex space-x-4">
          <div className="rounded-lg overflow-hidden w-1/2">
            <img src={product?.imageUrl} className="h-full w-full" />
          </div>
          <div className="flex flex-col space-y-8 w-full mt-5 ">
            <h2 className="kumbh text-3xl text- veryDarkBlue">
              {product?.Name}
            </h2>
            <h4 className="kumbh text-4xl font-bold text-[#fe735e]">
              {product?.Price}
            </h4>
            <hr className="border-darkGrayishBlue" />
            <p className="kumbh text-md text-darkGrayishBlue w-full">
              {product?.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductView;
