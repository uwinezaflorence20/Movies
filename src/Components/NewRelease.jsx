// src/components/NewReleases.js



const NewReleases = () => {
  const movies = [
    {
      image: '/001.jpeg',
      title: 'Ghosted',
      
      rating: 'HD',
      duration: '3:12:00',
    },
    {
      image: '/002.jpeg',
      title: 'John Wick',
      
      rating: 'HD',
      duration: '3:12:00',
    },
    {
      image: '/003.jpeg',
      title: 'Guardians ',
      
      rating: 'HD',
      duration: '3:12:00',
    },
    {
      image: '/004.jpeg',
      title: 'Covenant',
      
      rating: 'HD',
      duration: '3:12:00',
    },
  ];

  const series = [
    {
      image: '/005.jpeg',
      title: 'Silo',
     
      rating: 'HD',
      isSeries: true,
      episode: '6',
    },
    {
      image: '/006.jpeg',
      title: 'Black ',
   
      rating: 'HD',
      isSeries: true,
      episode: '6',
    },
    {
      image: '/007.jpeg',
      title: 'Drops ',
    
      rating: 'HD',
      isSeries: true,
      episode: '6',
    },
    {
      image: '/008.jpeg',
      title: 'Night',

      rating: 'HD',
      isSeries: true,
      episode: '6',
    },
  ];

  return (
    <div className="px-40 bg-black">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-white font-bold">New Release - Movies</h2>
          <button className="text-gray-500">View all &rarr;</button>
        </div>
        <div className="flex  space-x-4 overflow-x-auto">
          {movies.map((movie) => (
            <div key={movie.title} className="relative   text-white shadow-lg overflow-hidden w-60">
              <img src={movie.image} alt={movie.title} className="w-full  rounded-lg h-72 object-cover" />
              <div className="flex mt-3 space-x-12 ">
                <h3 className="text-sm font-bold">{movie.title}</h3>
                <div className="flex space-x-2">
                <div className="flex space-x-2 mt-1">
                
                  <span className="bg-[#FF0000] text-white text-sm px-1 py-1 rounded-md">HD</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-400 relative border-2 rounded-md
                   border-[#FF0000]  ">{movie.duration}</span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">New Release - Series</h2>
          <button className="text-gray-500">View all &rarr;</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {series.map((serie) => (
            <div key={serie.title} className="relative  text-white  shadow-lg overflow-hidden w-60">
              <img src={serie.image} alt={serie.title} className="w-full rounded-lg h-72 object-cover" />
               <span className="absolute   top-2 left-4 px-2 py-1 bg-[#FF0000] text-white text-xs  rounded-md">EP {serie.episode}</span> 
              <div className=" flex space-x-9 p-4">
                <h3 className="text-sm font-bold">{serie.title}</h3>
                <div className="flex space-x-2">
                <div className="flex space-x-2 mt-1">
                  <span className="bg-[#FF0000] text-white text-sm px-1 py-1 rounded-md">HD</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-400 relative border-2 rounded-md
                   border-[#FF0000] ">Season 1</span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
