import { IMAGE_PATH } from '../../const';

function MovieInfo({ selectMovie }) {
    return (
        <div className='movie__wrapper'>
            <div className='movie__wrapper-content' style={{ backgroundImage: `url(${IMAGE_PATH}${selectMovie.backdrop_path})` }}>
                <div className='movie__wrapper-content-text'>
                    <h1 className='movie__wrapper-content-title'>{selectMovie.title}</h1>
                    <p className='movie__wrapper-content-intro'>{selectMovie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
