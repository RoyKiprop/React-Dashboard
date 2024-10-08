/* eslint-disable react/prop-types */
import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const selectStyle = {
    padding: "0.45rem",
    color: "#9490a7",
    border: "1px solid #4b5563",
    borderRadius: "0.375rem",
    outline: "none",
    backgroundColor: "#2a263d",
    width: "100%",
    appearance: "none",
  };
  return (
    <div className=" w-full">
      <div className="flex flex-col">
        <label
          className="mb-1 text-sm font-medium"
          htmlFor={props.id || props.name}
        >
          {label} 
        </label>
        <select style={selectStyle} {...field} {...props} />
      </div>

      {meta.touched && meta.error ? (
        <div className="mt-1 text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
