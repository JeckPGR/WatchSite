import PropTypes from "prop-types";

const TextArea = ({ value, onChange, placeholder, name = "complaint" }) => {
  return (
    <textarea
      className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-blue-500 active:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={name}
      rows={7}
      cols={10}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextArea;
