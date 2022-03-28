import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Form from './components/Form';

function App() {

  const API_URL = 'https://api.themoviedb.org/3';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);

  const fetchMovies = async (search) => {
    const type = search ? 'search' : 'discover'
    const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: search,
      }
    });
    setSelectMovie(results[0])
    setMovies(results)
  };

  useEffect(() => {
    fetchMovies()
  }, []);

  const searchMovies = (evt) => {
    evt.preventDefault()
    fetchMovies(search)
  }

  return (
    <div className='app'>
      <Form searchMovies={searchMovies} setSearch={setSearch} />
      <div className='movie__wrapper'>
        <div className='movie__wrapper-content' style={{ backgroundImage: `url(${IMAGE_PATH}${selectMovie.backdrop_path})` }}>
          <div className='movie__wrapper-content-text'>
            <h1 className='movie__wrapper-content-title'>{selectMovie.title}</h1>
            <p className='movie__wrapper-content-intro'>{selectMovie.overview}</p>
          </div>
        </div>
      </div>
      <div className='movie__main'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            selectMovie={setSelectMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
