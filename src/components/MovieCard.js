import styled from 'styled-components'

const Title = styled.h3`
width: 100%;
color: #fff;
margin: 0;
`;

function MovieCard({ movie, selectMovie }) {

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div className="movie__main-item" onClick={() => selectMovie(movie)}>
            {movie.poster_path ?
                <img className="movie__main-img" src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
                : <div className="movie__main-no-img">Сорри, нет изображения</div>}
            <Title>{movie.title}</Title>
        </div>
    )
}

export default MovieCard;
