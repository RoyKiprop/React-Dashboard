/* eslint-disable react/prop-types */
import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inputStyle = {
    padding: '0.45rem',
    color: '#9490a7',
    border: '1px solid #e5e7eb', 
    borderRadius: '0.375rem',
    outline: 'none',
  };
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <label htmlFor={props.id || props.name} className="mb-1 text-sm font-medium">
          {label}
        </label>
        <input
          style={inputStyle}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="mt-1 text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;