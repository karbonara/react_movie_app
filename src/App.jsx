import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/movie-card/MovieCard';
import MovieInfo from './components/movie-info/MovieInfo';
import Form from './components/form/Form';
import { API_URL } from './const';

function App() {

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
      <MovieInfo selectMovie={selectMovie} />
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
