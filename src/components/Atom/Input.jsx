// Input.js
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder, name, type = "text" }) => {
  return (
    <input
      className=" bg-gray-50 focus:bg-white  border border-gray-300 text-gray-700 sm:text-sm rounded-lg active:ring-blue-500 active:border-blue-500 block w-full p-2.5"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={name}
      required
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
