import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ slides, onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    onSlideChange(currentSlide);
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div
      role="carousel"
      className="relative flex items-center justify-center w-full h-64 md:h-[450px]  lg:h-[500px] xl:h-[680px] xl:w-[460px] rounded-lg overflow-hidden"
    >
      <div className="w-full flex ">
        <div className="w-full  h-full transition-transform duration-300 ease-in-out rounded-xl ">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].caption}
            className=" h-full object-cover object-center rounded-xl w-full  bg-no-repeat "
          />
        </div>
      </div>
      {/* Indicator dots */}
      <div className="absolute bottom-0 w-full flex justify-center p-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 bg-white rounded-full mx-2 ${
              index === currentSlide ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)} // Keep the onClick if manual dot navigation is desired
          ></div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  onSlideChange: PropTypes.func,
};

export default Carousel;
