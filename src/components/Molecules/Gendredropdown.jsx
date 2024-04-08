// Remove Fragment and useLocation if they are not being used
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const GenreDropdown = ({ genres, onGenreChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleGenreSelect = (genre) => {
    onGenreChange(genre);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Button and dropdown UI elements */}
      {isOpen && (
        <ul className="absolute z-10 bg-white shadow-lg rounded mt-2 py-1 w-full">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleGenreSelect(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default GenreDropdown;
GenreDropdown.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      genreId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
