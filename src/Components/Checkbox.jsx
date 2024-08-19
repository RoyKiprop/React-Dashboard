/* eslint-disable react/prop-types */

function Checkbox({ checked, onChange }) {
    return (
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          className="form-checkbox h-4 w-4 text-green-500"
        />
      );
    };
    
export default Checkbox;
