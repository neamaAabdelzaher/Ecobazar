import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

const MenuNav = ({isContainer}) => {
  return (
    <div className="py-4 bg-gray-900">
      <div className={`${isContainer ? 'container px-3 md:px-0 xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto' : 'px-4'} flex justify-between items-center`}>
        {/* Links */}
        <div className="flex gap-8 text-gray-400">
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Home</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/shop"}>Shop</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Pages</Link>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-1 hover:text-white duration-200">
            <Link to={"/"}>Blog</Link>
            <IoIosArrowDown />
          </div>
          <Link className="hover:text-white duration-200" to={"/"}>
            About Us
          </Link>
          <Link className="hover:text-white duration-200" to={"/"}>
            Contact Us
          </Link>
        </div>
        {/* Phone */}
        <div className="text-white flex items-center gap-2">
          <FaPhoneVolume />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
