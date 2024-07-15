
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {
  return (
    <header className="bg-black  text-white text-sm px-40 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
          <a href="#" className="hover:text-red-600 ">Home</a>
          <a href="#" className="hover:text-red-600">Genre</a>
          <a href="#" className="hover:text-red-600">Country</a>
        </div>
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full px-4 py-2 rounded-3xl text-black pl-12"
          />
          <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" size={20} />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-red-600">Movie</a>
          <a href="#" className="hover:text-red-600">Serie</a>
          <a href="#" className="hover:text-red-600">Animation</a>
          <button className="p-2 hover:text-red-600">Login/Signup</button>
          <IoIosNotificationsOutline className="text-xl hover:text-red-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
