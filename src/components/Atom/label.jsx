// Label.js
import PropTypes from "prop-types";

const Label = ({ text, htmlfor, custom = "text-gray-700" }) => {
  return (
    <label
      className={`block mb-2 text-sm capitalize font-medium ${custom}`}
      htmlFor={htmlfor}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlfor: PropTypes.string.isRequired,
  custom: PropTypes.string,
};

export default Label;
