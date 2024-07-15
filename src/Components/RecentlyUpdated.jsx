// src/components/RecentlyUpdated.js
import { IoMdArrowForward } from "react-icons/io";

const shows = [
  {
    title: 'The Flash',
    season: 2,
    episode: 9,
    date: '11/05/23',
    image: '/flash.jpeg', // Replace with your image path
  },
  {
    title: 'Fubar',
    season: 1,
    episode: 8,
    date: '11/05/23',
    image: '/2.jpeg', // Replace with your image path
  },
  {
    title: 'Manifest',
    season: 4,
    episode: 12,
    date: '11/05/23',
    image: '/3.jpeg', // Replace with your image path
  },
  {
    title: 'Silo',
    season: 1,
    episode: 10,
    date: '11/05/23',
    image: '/4.jpeg', // Replace with your image path
  },
];

const RecentlyUpdated = () => {
  return (
    <div className="bg-black  text-white px-40 py-10 ">
      <h2 className="text-xl mb-4">Recently Updated</h2>
      <div className="flex items-center space-x-4">
        {shows.map((show, index) => (
          <div key={index} className="flex flex-row items-center space-x-4">
            <div>
            <img src={show.image} alt={show.title} className="w-20 h-28 object-cover mb-2 rounded-lg" />
            </div>
            <div>
            <h3 className="text-sm">{show.title}</h3>
            <p className="text-xs">Serie/S {show.season}/EP {show.episode}</p>
            <p className="text-xs">{show.date}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center ">
          <button className="bg-gray-400 rounded-full p-4 ml-12 hover:bg-gray-700">
          <IoMdArrowForward className="text-black text-4xl font-thin" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyUpdated;
