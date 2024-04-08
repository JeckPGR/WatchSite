import PropTypes from "prop-types";
export const Button = ({ text = "Play Trailer" }) => {
  return (
    <>
      <button className=" hover:bg-indigo-600/80  font-semibold  rounded-full w-fit px-3 py-2 text-white bg-indigo-600">
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
