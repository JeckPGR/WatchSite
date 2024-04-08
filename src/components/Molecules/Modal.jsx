import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50  z-40 flex justify-center items-center">
      <div className="bg-indigo-700 p-7 rounded-md shadow-lg relative max-w-lg md:w-full">
        <h1 className="text-white text-2xl my-3">Find Your Movie</h1>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-semibold"
        >
          <IoCloseSharp size={25} color="white" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
