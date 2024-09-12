/* eslint-disable react/prop-types */

function Checkbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="checkbox-custom"
    />
  );
}

export default Checkbox;

