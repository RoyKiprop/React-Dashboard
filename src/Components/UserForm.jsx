/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./FormComponents/TextInput";
import MySelect from "./FormComponents/Select";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const NewUser = ({ user = null, onSubmit }) => {
  const isEditMode = !user;

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center text-green-300">
        <PersonAddIcon />
        <h2 className="text-2xl text-green-300 font-bold">
          {isEditMode ? "EDIT PROFILE" : "NEW PROFILE"}
        </h2>
      </div>

      <div className="bg-[#2a263d] p-6 rounded-lg mr-6 text-[#9490a7]">
        <Formik
          initialValues={{
            firstName: user?.Name.split(" ")[0] || "",
            lastName: user?.Name.split(" ")[1] || "",
            email: user?.Email || "",
            age: user?.Age || "",
            phone: user?.Phone || "",
            city: user?.city || "",
            street: user?.street || "",
            state: user?.state || "",
            zip: user?.zip || "",
            roleType: user?.Role || "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be more than 2 characters")
              .required("First name is required"),
            lastName: Yup.string()
              .max(20, "Must be more than 2 characters")
              .required("Last Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            age: Yup.number()
              .min(1, "Age must be greater than 0")
              .required("Age is required"),
            phone: Yup.string().required("Phone is required"),
            state: Yup.string().required("State is required"),
            city: Yup.string().required("City is required"),
            street: Yup.string().required("Street is required"),
            zip: Yup.string().required("Zip is required"),
            roleType: Yup.string()
              .oneOf(["user", "admin"], "Invalid Role Type")
              .required("Role is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <h2 className="text-md text-green-300 mb-4">
              {isEditMode ? "Edit User" : "Create New User"}
            </h2>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-20">
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                />
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <MyTextInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Age"
                  name="age"
                  type="number"
                  placeholder="Enter age"
                />
                <MyTextInput
                  label="State"
                  name="state"
                  type="text"
                  placeholder="Enter state"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                />
                <MyTextInput
                  label="Zip"
                  name="zip"
                  type="text"
                  placeholder="Give zip code"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Street"
                  name="street"
                  type="text"
                  placeholder="Enter street address"
                />
                <MySelect label="Role" name="roleType">
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </MySelect>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-300 focus:bg-green-300"
              >
                {isEditMode ? "Update" : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewUser;
