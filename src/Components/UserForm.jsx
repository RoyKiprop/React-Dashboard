/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./FormComponents/TextInput";
import MySelect from "./FormComponents/Select";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const NewUser = () => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center text-green-300">
        <PersonAddIcon />
        <h2 className="text-2xl text-green-300 font-bold"> NEW PROFILE</h2>
      </div>

      <div className=" bg-[#2a263d] p-6 rounded-lg mr-6 text-[#9490a7]">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            phone: "",
            city: "",
            street: "",
            state: "",
            zip: "",
            roleType: "",
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
            age: Yup.string()
              .email("Invalid email address")
              .required("Age is required"),
            phone: Yup.string()
              .email("Invalid email address")
              .required("Phone is required"),
            state: Yup.string()
              .email("Invalid email address")
              .required("State is required"),
            city: Yup.string()
              .email("Invalid email address")
              .required("City is required"),
            street: Yup.string()
              .email("Invalid email address")
              .required("street is required"),
            zip: Yup.string()
              .email("Invalid email address")
              .required("Zip is required"),
            acceptedTerms: Yup.boolean()
              .required("This field is required")
              .oneOf([true], "You must accept the terms and conditions."),
            roleType: Yup.string()
              .oneOf(["user", "admin"], "Invalid Role Type")
              .required("Role is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <h2 className="tetx-2xl text-green-300 mb-4">Create New User</h2>
            <div className="flex flex-col space-y-3 ">
              <div className="flex space-x-20 ">
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                />

                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="janedoe@gmail.com"
                />

                <MyTextInput
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder="+25471111111"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Age"
                  name="age"
                  type="number"
                  placeholder="20"
                />

                <MyTextInput
                  label="State"
                  name="state"
                  type="text"
                  placeholder="Nairobi"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Nairobi"
                />

                <MyTextInput
                  label="Zip"
                  name="zip"
                  type="text"
                  placeholder="00100"
                />
              </div>
              <div className="flex space-x-20">
                <MyTextInput
                  label="Street"
                  name="street"
                  type="text"
                  placeholder="909 Cypress St"
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

export default NewUser;
