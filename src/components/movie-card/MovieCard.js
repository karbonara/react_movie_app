import { Title, VoteAverage, MovieMainItem } from './MovieCard-styled';
import { IMAGE_PATH } from '../../const';

function MovieCard({ movie, selectMovie }) {

    return (
        <MovieMainItem onClick={() => selectMovie(movie)}>
            {movie.poster_path ?
                <img className="movie__main-img" src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
                : <div className="movie__main-no-img">Сорри, нет изображения</div>}
            <Title>{movie.title}</Title>
            <VoteAverage>{movie.vote_average}</VoteAverage>
        </MovieMainItem>
    );
}

export default MovieCard;
