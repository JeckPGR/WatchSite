import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/watchsite.webp";
import {
  IoCloseSharp,
  IoLogOut,
  IoMedal,
  IoSettings,
  IoCalendarSharp,
  IoSearch,
} from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { PiEyeSlashFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { GenreItems } from "../../data/genreitems";
import Modal from "./Modal";
import SearchComponent from "../Fragments/searchquery";

const sidebardata = [
  {
    id: 1,
    title: "Home",
    icon: <AiFillHome size={25} />,
    link: "/",
    dropdown: false,
  },
  {
    id: 2,
    title: "Find Movie",
    icon: <IoSearch size={25} />,
    dropdown: true,
  },
  {
    id: 3,
    title: "Genre",
    icon: <PiEyeSlashFill size={25} />,
    link: "/genre",
    dropdown: true,
  },
  {
    id: 4,
    title: "Rating",
    icon: <IoMedal size={25} />,
    link: "/ratingpage",
    dropdown: true,
  },
  {
    id: 5,
    title: "Year",
    icon: <IoCalendarSharp size={25} />,
    link: "#",
    dropdown: true,
  },
];

const bottomsidebar = [
  {
    id: 1,
    title: "Settings",
    icon: <IoSettings size={26} />,
    link: "/settings",
  },
  {
    id: 2,
    title: "Log In",
    icon: <IoLogOut size={27} />,
    link: "/login",
  },
];

const currentYear = new Date().getFullYear();
const startYear = 2001; // Adjust as needed
const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => currentYear - index
);

export const Sidebar = () => {
  const navigate = useNavigate();
  const [OpenSidebar, SetOpenSidebar] = useState(false);
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const openSearchModal = () => setShowSearchModal(true);
  const closeSearchModal = () => setShowSearchModal(false);
  const toggleGenreDropdown = () => setShowGenreDropdown((prev) => !prev);
  const toggleYearDropdown = () => setShowYearDropdown(!showYearDropdown);
  return (
    <>
      <aside
        role="navigation"
        className={`bg-slate-100/70 border-r shadow-lg overflow-y-auto genre-dropdown shadow-slate-950/80 border-slate-600/80 bg-gradient-to-bl from-indigo-600 to-indigo-700 fixed md:-left-1 h-screen  z-10 justify-between transition-all duration-500 flex flex-col ease-in-out overflow-hidden  ${
          OpenSidebar ? " w-72" : " w-16 md:w-[90px]"
        }`}
      >
        {/* Top */}
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-around">
            <header className="text-3xl   text-white flex items-center font-Anta font-semibold">
              {OpenSidebar ? (
                <>
                  Watch<span className="text-indigo-950/90 py-2">Site</span>
                </>
              ) : (
                <div
                  className={`transition-transform duration-300 ${
                    OpenSidebar && "!rotate-180"
                  }`}
                >
                  <button aria-label="logo-button" className="">
                    <img
                      src={Logo}
                      alt="Image Logo"
                      className="size-12 mt-2 hover:rounded-md hover:bg-indigo-800/90 "
                      onClick={() => SetOpenSidebar(!OpenSidebar)}
                    />
                  </button>
                </div>
              )}
            </header>
            {OpenSidebar && (
              <button
                className="  rounded-full hover:bg-slate-300/20 p-1 transition-transform duration-300 "
                onClick={() => SetOpenSidebar(!OpenSidebar)}
              >
                <IoCloseSharp size={25} color="white" />
              </button>
            )}
          </div>
          {sidebardata.map((data) => {
            if (data.title === "Find Movie") {
              return (
                <div
                  key={data.id}
                  className={`${OpenSidebar ? "px-9" : "px-2"} md:px-5`}
                >
                  <button
                    key={data.id}
                    onClick={openSearchModal}
                    className="flex items-center  justify-between gap-x-6 p-3 transition-all duration-150 ease-out text-slate-300 hover:text-indigo-500 w-full rounded-md hover:font-semibold group font-medium hover:bg-slate-200/80"
                  >
                    <div className="flex gap-x-6">
                      {data.icon}
                      {OpenSidebar && data.title}
                    </div>
                  </button>
                </div>
              );
            }
            if (data.title === "Genre") {
              return (
                <div
                  key={data.id}
                  className={`${OpenSidebar ? "px-9" : "px-2"} md:px-5`}
                >
                  <button
                    onClick={toggleGenreDropdown}
                    className="flex items-center justify-between gap-x-6 p-3 transition-all duration-150 ease-out text-slate-300 hover:text-indigo-500 w-full rounded-md hover:font-semibold group font-medium hover:bg-slate-200/80"
                  >
                    <div className="flex gap-x-6">
                      {data.icon}
                      {OpenSidebar && data.title}
                    </div>
                    {OpenSidebar && <CiMenuKebab size={25} color="white" />}
                  </button>

                  {showGenreDropdown && OpenSidebar && (
                    <div
                      className={`flex flex-col pl-4 pt-2 genre-dropdown max-h-96 ${
                        showGenreDropdown && OpenSidebar
                          ? "overflow-y-scroll"
                          : ""
                      }`}
                    >
                      {GenreItems.map((genre) => (
                        <a
                          key={genre.id}
                          onClick={() =>
                            navigate("/genre", {
                              state: {
                                genreId: genre.genreId,
                                genreName: genre.name,
                              },
                            })
                          }
                          className="text-slate-300 hover:text-indigo-500 p-2 hover:bg-slate-200/80 rounded-md"
                        >
                          {genre.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (data.title === "Year") {
              return (
                <div
                  key={data.id}
                  className={`${OpenSidebar ? "px-9" : "px-2"} md:px-5`}
                >
                  <button
                    onClick={toggleYearDropdown}
                    className="flex items-center justify-between gap-x-6 p-3 transition-all duration-150 ease-out text-slate-300 hover:text-indigo-500 w-full rounded-md hover:font-semibold group font-medium hover:bg-slate-200/80"
                  >
                    <div className="flex gap-x-6">
                      {data.icon}
                      {OpenSidebar && data.title}
                    </div>
                    {OpenSidebar && <CiMenuKebab size={25} color="white" />}
                  </button>

                  {showYearDropdown && OpenSidebar && (
                    <div
                      className={`flex flex-col pl-4 pt-2 genre-dropdown max-h-96 ${
                        showYearDropdown && OpenSidebar
                          ? "overflow-y-scroll"
                          : ""
                      }`}
                    >
                      {years.map((year) => (
                        <a
                          key={year}
                          onClick={() => navigate(`/byyear/${year}`)}
                          className="text-slate-300 hover:text-indigo-500 p-2 hover:bg-slate-200/80 rounded-md"
                        >
                          {year}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div
                  key={data.id}
                  className="flex text-base justify-center items-center md:px-5 gap-y-2 w-full"
                >
                  <a
                    href={data.link}
                    className="flex  group gap-x-6 p-3 items-center transition-all duration-150 ease-out text-slate-300 hover:text-indigo-500 justify-start w-3/4 md:w-full rounded-md hover:font-semibold font-medium hover:bg-slate-200/80"
                  >
                    {data.icon}
                    {OpenSidebar && data.title}
                  </a>
                </div>
              );
            }
          })}
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-y-2 items-center py-3 ">
          <div className="border-t-2 border-indigo-700 w-[95%] rounded-full"></div>
          {bottomsidebar.map((data) => (
            <div
              key={data.id}
              className="flex text-base justify-center items-center md:px-5 gap-y-2 w-full"
            >
              <a
                href={data.link}
                className="flex gap-x-5 group p-3 items-center transition-all duration-150 ease-out text-slate-300 hover:text-indigo-500 justify-start w-3/4 md:w-full rounded-xl hover:font-semibold font-medium hover:bg-slate-200/80"
              >
                <span className="group-hover:!rotate-180  duration-500 ">
                  {data.icon}
                </span>
                {OpenSidebar && data.title}
              </a>
            </div>
          ))}
          {OpenSidebar && (
            <footer className="font-semibold text-white">
              {" "}
              &copy; Watch<span className="text-indigo-950">Site 2024</span>
            </footer>
          )}
        </div>
      </aside>
      <Modal isOpen={showSearchModal} onClose={closeSearchModal}>
        <SearchComponent />
      </Modal>
    </>
  );
};
