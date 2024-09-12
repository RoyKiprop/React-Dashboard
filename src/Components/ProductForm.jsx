/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./FormComponents/TextInput";
import MySelect from "./FormComponents/Select";
import Inventory from "@mui/icons-material/Inventory";
import MyTextArea from "./FormComponents/TextArea.jsx";

const NewProduct = ({ product, onSubmit }) => {
  return (
    <div className="space-y-6">
      <div className="flex space-x-2 items-center text-green-300">
        <Inventory />
        <h2 className="text-2xl text-green-300 font-bold">
          {product ? "EDIT PRODUCT" : "NEW PRODUCT"}
        </h2>
      </div>

      <div className=" bg-[#2a263d] p-6 rounded-lg mr-6 text-[#9490a7]">
        <Formik
          initialValues={{
            name: product?.Name || "",
            sku: product?.SKU || "",
            price: product?.Price || "",
            brand: product?.brand || "",
            description: product?.description || "",
            color: product?.color || "",
            size: product?.size || "",
            quantity: product?.Quantity || "",
            categoryType: product?.Category || "",
            brandType: product?.brand || "",
            url: product?.imageUrl || "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Product name is required"),
            price: Yup.string().required("Product price is required"),
            sku: Yup.string().required("Product SKU is required"),
            color: Yup.string().required("Product color is required"),
            quantity: Yup.string().required("Product quantity is required"),
            size: Yup.string().required("Product size is required"),
            url: Yup.string().required("Product's image URL is required"),
            categoryType: Yup.string().required("Product category is required"),
            brandType: Yup.string().required("Product brand is required"),
            description: Yup.string().required("Product description is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            onSubmit(values, product ? "edit" : "create");
            setSubmitting(false);
          }}
        >
          <Form>
            <h2 className="text-md text-green-300 mb-4">
              {product ? "Edit current Product" : "Create New Product"}
            </h2>
            <div className="flex flex-col space-y-3 ">
              <div className="flex space-x-8">
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter product name"
                />

                <MyTextInput
                  label="SKU"
                  name="sku"
                  type="text"
                  placeholder="Enter product SKU"
                />
                <MyTextInput
                  label="Price"
                  name="price"
                  type="text"
                  placeholder="Enter product price"
                />
              </div>
              <div className="flex space-x-8">
                <MySelect label="Category" name="categoryType">
                  <option value="">Select category</option>
                  <option value="running">Running</option>
                  <option value="casual">Casual</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="luxury">Luxury</option>
                  <option value="basketball">Basketball</option>
                  <option value="retro">Retro</option>
                  <option value="fashion">Fashion</option>
                </MySelect>

                <MyTextInput
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Enter product quantity"
                />
                <MySelect label="Brand" name="brandType">
                  <option value="">Select Brand</option>
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="balenciaga">Balenciaga</option>
                  <option value="fila">Fila</option>
                  <option value="reebok">Reebok</option>
                  <option value="jordan">Jordan</option>
                  <option value="puma">Puma</option>
                </MySelect>
              </div>
              <div className="flex space-x-8">
                <MyTextInput
                  label="Color"
                  name="color"
                  type="text"
                  placeholder="Enter product color"
                />
                <MyTextInput
                  label="Size"
                  name="size"
                  type="text"
                  placeholder="Enter product size"
                />
                <MyTextInput
                  label="Image Url"
                  name="url"
                  type="url"
                  placeholder="Enter image url"
                />
              </div>

              <div className="flex space-x-8">
                <MyTextArea
                  label="Description"
                  name="description"
                  placeholder="Enter the product description"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className=" bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-300 focus:bg-green-300 "
              >
                {product ? "Update Product" : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewProduct;
