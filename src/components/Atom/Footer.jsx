import PropTypes from "prop-types";

const Footer = ({ type }) => {
  if (type === "home") {
    return (
      <>
        <footer className="bg-indigo-900  text-white border-t   border-indigo-200/20">
          <div className="max-w-6xl mx-auto p-primarysm md:p-primarymd">
            <div className="md:flex md:justify-between ">
              <div className="mb-6 md:mb-0 flex flex-col justify-center items-center md:items-start">
                <h2 className="text-4xl  text-white flex items-center py-2  font-Anta font-semibold">
                  WatchSite
                </h2>
                <p className="text-lg">Created By DzakyRazi</p>
              </div>
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Services</h2>
                <ul>
                  <li>
                    <a href="/" className="text-sm hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-sm hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-sm hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-sm hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Contact</h2>
                <p className="text-sm">
                  South Jakarta, Indonesia
                  <br />
                  Bandung, Indonesia
                </p>
                <p className="text-sm mt-4">Email: dzakyrazi@gmail.com</p>
                <p className="text-sm">Phone: (+62) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800 py-4 pl-10">
            <p className="text-center text-sm  text-gray-200">
              &copy; {new Date().getFullYear()} WatchSite. All rights reserved.
            </p>
          </div>
        </footer>
      </>
    );
  } else {
    return (
      <footer className="bg-indigo-900  text-white border-t border-indigo-200/20">
        <div className="max-w-6xl mx-auto px-4 py-7 md:py-10">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl py-2  text-white flex items-center font-Anta font-semibold">
                WatchSite
              </h2>
              <p className="text-xl">Created By DzakyRazi</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Services</h2>
              <ul>
                <li>
                  <a href="/" className="text-sm hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-sm hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact</h2>
              <p className="text-sm">
                South Jakarta, Indonesia
                <br />
                Bandung, Indonesia
              </p>
              <p className="text-sm mt-4">Email: dzakyrazi@gmail.com</p>
              <p className="text-sm">Phone: (+62) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-800 py-4">
          <p className="text-center text-sm text-gray-200">
            &copy; {new Date().getFullYear()} WatchSite. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
};
export default Footer;

Footer.propTypes = {
  type: PropTypes.string,
};
