import { FaPlayCircle } from "react-icons/fa";

import { CiTimer } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
const TrendingMovies = () => {
  const movies = [
    {
      title: "Medellin",
      duration: "3:12:00",
      rating: 8.0,
      genres: ["Action", "Comedy"],
      image: "/01.jpeg",
    },
    {
      title: "Fast X",
      duration: "3:12:00",
      rating: 8.0,
      genres: ["Action", "Crime", "Thriller"],
      image: "/02.jpeg",
    },
    {
      title: "The Black ...",
      duration: "3:12:00",
      rating: 8.0,
      genres: ["Horror", "Thriller"],
      image: "/03.jpeg",
    },
  ];

  return (
    <div className="p-8 bg-black text-white px-40">
     <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-white font-bold">Trendings</h2>
          <button className="text-gray-500">View all &rarr;</button>
        </div>
      <div className="flex space-x-4">
        {movies.map((movie, index) => (
          <div key={index} className=" overflow-hidden w-96">
           <div className="relative">
  <img
    src={movie.image}
    alt={movie.title}
    className="h-48 w-96 rounded-xl"
  />
  <div className="absolute flex space-x-40  top-0 left-4 right-4     text-white p-2">
    <p className="text-sm flex "><CiTimer className="mt-1" /> {movie.duration}</p>
    <p className="text-sm flex"><CiStar className="mt-1" />{movie.rating}</p>
  </div>
  <button className="absolute inset-0 flex items-center justify-center text-white">
    <FaPlayCircle className="text-3xl" />
  </button>
</div>

            <div className=" flex space-x-20 mt-2  ">
              <h3 className="text-sm font-bold ">{movie.title}</h3>
              
              <div className="flex justify-center space-x-1">
                {movie.genres.map((genre, idx) => (
                  <span
                    key={idx}
                    className="p-1 rounded-xl  bg-[#FF0000]"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
