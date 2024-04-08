import PropTypes from "prop-types";

const TextArea = ({ value, onChange, placeholder, name = "complaint" }) => {
  return (
    <textarea
      className="shadow appearance-none border rounded placeholder:text-sm placeholder:capitalize w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
