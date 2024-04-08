// Label.js
import PropTypes from "prop-types";

const Label = ({ text, htmlfor }) => {
  return (
    <label
      className="block mb-2 text-sm capitalize font-medium text-gray-700"
      htmlFor={htmlfor}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlfor: PropTypes.string.isRequired,
};

export default Label;
