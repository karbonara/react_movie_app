import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/movie-card/MovieCard';
import MovieInfo from './components/movie-info/MovieInfo';
// import Tv from './components/tv/tv';
import Form from './components/form/Form';
import { API_URL } from './const';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  // const [tvs, setTv] = useState([]);

  const fetchMovies = async (search) => {
    const type = search ? 'search' : 'discover'
    const { data: { results } } = await
      axios.get(`${API_URL}/${type}/movie/?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=ru&query=${search}`);
    setSelectMovie(results[0])
    setMovies(results)
  };


  // const fetchsTv = async (search) => {
  //   const type = search ? 'search' : 'discover'
  //   const { data: { results } } = await
  //     axios.get(`${API_URL}/${type}/tv/?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=ru`);
  //   setTv(results)
  // };

  useEffect(() => {
    fetchMovies()
    // fetchsTv()
  }, []);

  const searchMovies = (evt) => {
    evt.preventDefault()
    fetchMovies(search)
    // fetchsTv(search)
  }

  return (
    <div className='app'>
      <Form searchMovies={searchMovies} setSearch={setSearch} />
      <MovieInfo selectMovie={selectMovie} />
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
      <h1 className='name'>Сериалы</h1>
      <div className='movie__main'>
        {/* {tvs.map(tv => (
          <Tv
            key={tv.id}
            tv={tv}
          />
        ))} */}
      </div>
    </div>
  );
}

export default App;
