
import Header from './Components/Header';
import MovieDetail from './Components/MovieDetails';
import NewRelease from './Components/NewRelease';
import RecentlyUpdated from './Components/RecentlyUpdated';
import RecommendedSection from './Components/RecommendedSection';
import TrendingMovies from './Components/TrendingMovies';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieDetail />
     <RecentlyUpdated/>
     <TrendingMovies/>
     <NewRelease/>
     <RecommendedSection/>
    </div>
  );
}

export default App;
