import { FaCalendarAlt } from "react-icons/fa";

import { CiTimer } from "react-icons/ci";

import { CiStar } from "react-icons/ci";

const MovieDetail = () => {
  return (
    <div 
      className="relative text-white p-40 bg-cover bg-center" 
      style={{ backgroundImage: "url('/avatar.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="flex space-x-4 justify-center mt-52">
      <button className=" bg-[#FF0000]  py-4 px-7  relative border-2 border-[#FF0000] font-bold rounded-lg p-2 hover:bg-[#ffffff]  hover:text-[#FF0000] ">Watch Now</button>
          <button className=" py-4 px-7  relative border-2 border-[#FF0000] font-bold rounded-lg p-2 hover:bg-[#ffffff]  hover:text-[#FF0000] ">Watch Later</button>
        </div>
      <div className="relative z-10 p-4 text-base  ">
        <h1 className="text-2xl font-bold mb-2">Avatar: The Way of Water</h1>
        <div className="flex space-x-2 mb-4">
          <div className="space-x-2">
          <span className="bg-white text-black text-sm font-bold my-2 py-1 px-3 rounded-full">Action</span>
          <span className="bg-white text-black text-sm font-bold text-center my-2 py-1 px-3 rounded-full">Adventure</span>
          <span className="bg-white text-black text-sm font-bold text-center my-2 py-1 px-3 rounded-full ">Science Fiction</span>
       </div> 
       <div className=" flex space-x-2 ">
       
             <FaCalendarAlt className="mt-1 space-x-4" /> <p>2022</p>  
             <CiTimer  className="mt-1 space-x-4"/> <p>3:12:00</p>
             <CiStar className="mt-1 space-x-4 text-white" /><p> 8.5</p>
          </div>
       </div>
        
        <p className="mb-8 text-balance"></p>
        Set more than a decade after the events of the first film, learn the story of the<br></br> 
        Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the<br></br>
         lengths they go to keep each other safe,the battles theyfight to stay alive,<br></br>
         and the tragedies they endure.
      </div>
    </div>
  );
}

export default MovieDetail;
