import React, { useEffect, useState } from "react";
import Search from "../../assets/Vector.png";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp, IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../firebaseconfig/config";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [user, setUser] = useState(null);
  const [signout, setSignout] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(FIREBASE_AUTH)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Signout error:", error);
      });
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <div className="bg-black text-white text-center h-[13vh] w-full fixed top-0 flex justify-end items-center z-10">
        <ul className="list-none flex text-center gap-4 mr-24">
          <li className="hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <a href="#">Genre</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#">Country</a>
          </li>
          <li className="relative">
            <input
              type="text"
              placeholder="Search Movies....."
              className="relative top-[-5px] border-none rounded-full w-[250px] pl-2 h-[30px]"
            />
            <img
              className="absolute left-[-36px]"
              src={Search}
              alt="search"
            />
          </li>
          <li className="hover:text-red-500">
            <a href="#">Movies</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#">Series</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#">Animation</a>
          </li>
          <li className="relative hover:text-red-500">
            <a href="#">
              <IoNotificationsOutline className="w-5 h-5 text-white cursor-pointer" />
            </a>
          </li>
          {user ? (
            <li className="relative hover:text-red-500">
              <Link>
                <span onClick={() => setSignout(!signout)}>
                  {user.displayName}
                </span>
              </Link>
              {signout && (
                <div
                  onClick={handleSignOut}
                  className="absolute top-14 h-10 left-[-4px] w-28 rounded-md bg-black hover:text-red-600 hover:font-bold hover:cursor-pointer text-center text-[17px] font-[300]"
                >
                  SignOut
                </div>
              )}
            </li>
          ) : (
            <li className="hover:text-red-500">
              <Link to="/login">Login/SignUp</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden bg-black text-white fixed w-screen h-20 top-0 left-0 justify-between items-center z-10">
        <div className="flex-1 px-5">
          <Link to="/">Movies</Link>
        </div>
        <div className="text-xl">
          <button onClick={() => setIsOpened(!isOpened)} className="w-10 h-10 font-bold">
            {isOpened ? (
              <IoCloseSharp className="w-8 h-8 font-bold" />
            ) : (
              <FaBars className="w-8 h-8 font-bold" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpened ? "md:hidden px-10 bg-slate-600 z-10 top-20 fixed w-full h-full" : "hidden"
        }`}
      >
        {isOpened && (
          <ul onClick={() => setIsOpened(!isOpened)} className="md:hidden list-none text-xl flex flex-col gap-4 pt-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Genre</a>
            </li>
            <li>
              <a href="#">Country</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Animation</a>
            </li>
            <li>
              <Link to="/login">Login/SignUp</Link>
            </li>
            <li>
              <a href="#">Notification</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
