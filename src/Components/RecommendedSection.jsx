// src/components/RecommendedSection.js
import { CiTimer } from "react-icons/ci";



const RecommendedSection = () => {
  const movies = [
    {
      image: '/a.jpeg',
      title: 'Robots',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/b.jpeg',
      title: 'Love Again',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/c.jpeg',
      title: 'Hyptoni',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/d.jpeg',
      title: 'Paint',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/e.jpeg',
      title: 'Book Club',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/f.jpeg',
      title: 'The Mother',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/g.jpeg',
      title: 'January 6th',
      status: 'CAM',
      duration: '3:12:00',
    },
    {
      image: '/h.jpeg',
      title: 'Sisu',
      status: 'CAM',
      duration: '3:12:00',
    },
  ];

  return (
    <div className=" bg-black text-white p-40">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Recommended</h2>
        <div className="flex mr-80 space-x-2 mb-2">
        <button className="bg-[#FF0000] text-white px-1 py-1 rounded-xl">Movies</button>
        <button className="text-sm text-gray-400 relative border-2 
                   border-[#FF0000]   px-1 py-1 rounded-xl">Series</button>
        <button className="text-sm text-gray-400 relative border-2 
                   border-[#FF0000]   px-1 py-1 rounded-xl">Animation</button>
      </div>
        <button className="text-gray-400">View all &rarr;</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.title} className="relative  text-white rounded-lg shadow-lg overflow-hidden">
            <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="  flex space-x-7 p-4">
              <h3 className="text-sm font-bold">{movie.title}</h3>
              <div className="flex space-x-2" >
              <div className="flex space-x-1 mt-2">
                <span className={`text-xs px-2 py-1 rounded-md ${movie.status === 'HD' ? 'bg-red-500' : ' bg-[#FF0000]'}`}>
                  {movie.status}
                </span>
                
                <span  className="text-sm flex text-gray-400 relative border-2 
                   border-[#FF0000] px-1 py-1 rounded-xl"> <CiTimer className="pt-1" />{movie.duration} </span>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
