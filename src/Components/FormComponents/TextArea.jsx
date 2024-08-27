/* eslint-disable react/prop-types */
import { useField } from 'formik';

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const textareaStyle = {
    padding: '0.75rem',
    color: '#9490a7', 
    border: '1px solid #4b5563',
    borderRadius: '0.375rem',
    outline: 'none',
    width: '100%',
    minHeight: '100px', 
    backgroundColor: '#2a263d'
  };

  return (
    <div className="w-full mb-4">
      <label 
        htmlFor={props.id || props.name} 
        className="block mb-1 text-sm font-medium "
      >
        {label}
        
      </label>
      <textarea
        {...field}
        {...props}
        style={textareaStyle}
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextArea;