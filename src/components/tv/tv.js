import { Title, MovieMainItem } from '../movie-card/MovieCard-styled';
import { IMAGE_PATH } from '../../const';

function Tv({ tv }) {

    return (
        <MovieMainItem >
            {tv.poster_path ?
                <img className="movie__main-img" src={`${IMAGE_PATH}${tv.poster_path}`} alt={tv.name} />
                : <div className="movie__main-no-img">Сорри, нет изображения</div>}
            <Title>{tv.name}</Title>
        </MovieMainItem>
    );
}

export default Tv;
