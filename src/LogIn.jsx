import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseconfig/config";

const LogIn = () => {
  const [isOpen ,setIsOpen]=useState(true)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setErorr]=useState("")
  const [emailError,setEmailError]=useState(false)
  const [passwordError,SetPasswordError]=useState(false)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();

  const isValidateForm=()=>{
    if(!email){
      setEmailError("Email is required")
      SetPasswordError("")
      return false;
    }
    if(!password){
      SetPasswordError("Password is required")
      setEmailError("")
      return false;
    }
    return true;
  }

  const handleBack=()=>{
    setIsOpen(!isOpen)
    navigate('/')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    setErorr("")

    if(!isValidateForm()){
      setLoading(false)
      return;
    }

    try {
      const {user}=await signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
      console.log(user)
      navigate('/')
      alert("Congulaturation Login Successfull!!")
    } catch (error) {
      console.log(error)
      setErorr("Wrong email or Password!..")
      if (error.code === 'auth/invalid-email') {
        setEmailError("Email is not valid");
        SetPasswordError("")
      } else if (error.code === 'auth/email-already-in-use') {
        setEmailError("Email is already in use");
        SetPasswordError("")
      } else {
        setEmailError(error.message);
      }
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen w-screen flex items-center justify-center">
      {isOpen && (
        <div className="fixed top-6 right-6">
          <IoCloseSharp
            onClick={handleBack}
            className="text-white h-8 w-8 cursor-pointer hover:text-red-500 transition-colors duration-300"
          />
        </div>
      )}
      {isOpen && (
        <div className="bg-gray-800 mt-[12vh] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md">
          <form className="flex flex-col gap-6 text-xl">
            <h1 className="text-3xl mb-6 font-bold text-white text-center">Login</h1>

            <label className="flex flex-col gap-2 font-medium text-gray-300 relative">
              Email address:
              {emailError && (
                <p className="text-red-500 text-sm absolute right-0 top-0">{emailError}</p>
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className="border border-gray-600 h-12 bg-gray-700 rounded-lg px-4 font-normal text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </label>
            <label className="flex flex-col gap-2 font-medium text-gray-300 relative">
              Password:
              {passwordError && (
                <p className="text-red-500 text-sm absolute right-0 top-0">{passwordError}</p>
              )}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Write strong password"
                type="password"
                className="border border-gray-600 h-12 bg-gray-700 rounded-lg px-4 font-normal text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </label>
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg mt-4 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            <p className="text-center text-gray-400">
              Or{" "}
              <Link
                className="text-red-500 hover:text-red-400 font-medium transition-colors duration-300"
                to="/signup"
              >
                Create account here
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogIn;
