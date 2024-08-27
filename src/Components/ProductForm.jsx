/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./FormComponents/TextInput";
import MySelect from "./FormComponents/Select";
import Inventory from "@mui/icons-material/Inventory";
import MyTextArea from "./FormComponents/TextArea.jsx";


const NewProduct = () => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center text-green-300">
        <Inventory />
        <h2 className="text-2xl text-green-300 font-bold"> NEW PRODUCT</h2>
      </div>

      <div className=" bg-[#2a263d] p-6 rounded-lg mr-6 text-[#9490a7]">
        <Formik
          initialValues={{
            name: "",
            sku: "",
            price: "",
            brand: "",
            description: "",
            color: "",
            size: "",
            quantity: "",
            categoryType: "",
            brandType: "",
            url: ""
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Product name is required"),
            price: Yup.string().required("Product price is required"),
            sku: Yup.string().required("product SKU is required"),
            color: Yup.string().required("Product color is required"),
            quantity: Yup.string().required("Product quantity is required"),
            size: Yup.string().required("Product size is required"),
            url: Yup.string().required("product's image url is required"),
            zip: Yup.string().required("Zip is required"),
            categoryType: Yup.string()
              .required("Product category is required"),
            brandType: Yup.string()
              .required("Product category is required"),
            description: Yup.string()
              .required("Product description is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h2 className="tetx-2xl text-green-300 mb-4">Create New Product</h2>
            <div className="flex flex-col space-y-3 ">
              <div className="flex space-x-8 ">
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Nike LeBron 18"
                />

                <MyTextInput
                  label="SKU"
                  name="sku"
                  type="text"
                  placeholder="NKE-LB18-019"
                />
                <MyTextInput
                  label="Price"
                  name="price"
                  type="text"
                  placeholder="3500 KES"
                />
              </div>
              <div className="flex space-x-8">
                <MySelect label="Category" name="categoryType">
                  <option value="">Select category</option>
                  <option value="admin">Running</option>
                  <option value="user">Casual</option>
                  <option value="user">Lifestyle</option>
                  <option value="user">Luxury</option>
                  <option value="user">Basketball</option>
                  <option value="user">Retro</option>
                  <option value="user">Fashion</option>
                </MySelect>

                <MyTextInput
                  label="Quantity"
                  name="quantity"
                  type="number"
                  placeholder="1"
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
                  placeholder="Black"
                />
                <MyTextInput
                  label="Size"
                  name="size"
                  type="text"
                  placeholder="US 12"
                />
                <MyTextInput
                  label="Image Url"
                  name="url"
                  type="url"
                  placeholder="https://images.unsplash.com/photo-1600245615867-8785ee7a2311"
                />
              </div>

              <div className="flex space-x-8">
                <MyTextArea
                  label="Description"
                  name="description"
                  placeholder="Enter the product decription"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className=" bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-300 focus:bg-green-300 "
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewProduct;
