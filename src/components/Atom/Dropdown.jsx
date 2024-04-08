import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ title, items, url }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Link to={url}>
          <Menu.Button
            onClick={toggleDropdown}
            className="flex items-center justify-center gap-x-1 group  text-secondary duration-150 group hover:bg-secondary/10 py-2 px-3 rounded-full hover:text-black  "
          >
            {title}
            <IoIosArrowDown
              size={16}
              className="-mr-1  text-secondary  duration-1000 group-hover:text-black   "
              aria-hidden="true"
            />
          </Menu.Button>
        </Link>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="lg:absolute lg:top-11 lg:-left-20 z-10 mt-1 w-56 origin-top-right lg:rounded-md lg:border lg:border-secondary/35   lg:overflow-hidden lg:bg-white lg:shadow-lg ">
          <div className=" ">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href={item.element}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  url: PropTypes.string.isRequired,
};
