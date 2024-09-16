import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseconfig/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const SignUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)  
  const [nameError,setNameErorr]=useState(false)
  const [emailError,setEmailError]=useState(false)
  const [passwordError,SetPasswordError]=useState(false)
  const isValidateForm=()=>{
    if(!name){
      setNameErorr("Name is required")
      setEmailError('')
      SetPasswordError("")
      return false;
    }
    if(!email){
      setEmailError('Email is required')
      setNameErorr("")
      SetPasswordError("")
      return false;
    }
    if(!password){
      SetPasswordError("Password is rquired")
      setEmailError('')
      setNameErorr("")
      return false;
    }
    return true;
  }
  const handleBack = () => {
    setIsOpen(!isOpen);
    navigate(-1);
  };
  // console.log('signup data'+email+" "+password)
  const handleData=async(e)=>{
    e.preventDefault()
    setLoading(true)

    if(!isValidateForm()){
      setLoading(false)
      return;
    }

    try {
      const response=await createUserWithEmailAndPassword(FIREBASE_AUTH,email,password);
            await updateProfile(response.user,{displayName:name});
      alert("Registration Successfull please login")
      navigate(-1)
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/invalid-email') {
        setEmailError("Email is not valid");
        setNameErorr("")
        SetPasswordError("")
      } else if (error.code === 'auth/email-already-in-use') {
        setEmailError("Email is already in use");
        setNameErorr("")
        SetPasswordError("")
      } else {
        setEmailError(error.message);
      }
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className="bg-gradient-to-br mt-[12vh] from-gray-900 to-black min-h-screen w-screen flex items-center justify-center">
      {isOpen && (
        <div className="fixed top-6 right-6">
          <IoCloseSharp
            onClick={handleBack}
            className="text-white h-8 w-8 cursor-pointer hover:text-red-500 transition-colors duration-300"
          />
        </div>
      )}
      {isOpen && (
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md">
          <form className="flex flex-col gap-4 text-xl">
            <h1 className="text-3xl mb-6 font-bold text-white text-center">
              Register
            </h1>
            
            <label className="flex flex-col gap-2 font-medium text-gray-300 relative">
              User Name:
              {nameError && (
                <p className="text-red-500 text-sm absolute right-0 top-0">{nameError}</p>
              )}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your user name"
                type="text"
                className="border border-gray-600 h-12 bg-gray-700 rounded-lg px-4 font-normal text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </label>

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
              onClick={(e) => handleData(e)}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg mt-4 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
