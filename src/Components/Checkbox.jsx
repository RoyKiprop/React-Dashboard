/* eslint-disable react/prop-types */

function Checkbox({ checked, onChange }) {
    return (
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          className="form-checkbox h-5 w-5 text-green-500"
        />
      );
    };
    
export default Checkbox;
