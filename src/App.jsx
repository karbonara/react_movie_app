import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieInfo from './components/movie-info/MovieInfo';
import Form from './components/form/Form';
import { API_URL } from './const';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import TvSeriesPage from './components/tv-series-page/tv-series-page';
import MovieCard from './components/movie-card/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  const [tvseries, setTvSeries] = useState([]);

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

  const fetchsTv = async (search) => {
    const type = search ? 'search' : 'discover'
    const { data: { results } } = await axios.get(`${API_URL}/${type}/tv`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: search,
      }
    });
    setTvSeries(results)
  };

  useEffect(() => {
    fetchMovies()
    fetchsTv()
  }, []);

  const searchMovies = (evt) => {
    evt.preventDefault()
    fetchMovies(search)
  }

  return (
    <div className='app'>
      <div className='links-items'>
        <Link className='links' to="/movie">movie</Link>
        <Link className='links' to="/tv">tv</Link>
      </div>
      <Form searchMovies={searchMovies} setSearch={setSearch} />
      <MovieInfo selectMovie={selectMovie} />
      <Routes>
        <Route path="/tv" element={<TvSeriesPage tvseries={tvseries} />} />
      </Routes>
      <div>
        <h1 className='name'>Фильмы</h1>
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
    </div>
  );
}

export default App;

