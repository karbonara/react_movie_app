import TvSeriesCard from '../tv-series-card/tv-series-card';

function TvSeriesPage({ tvseries }) {
    return (
        <div>
            <h1 className='name'>Сериалы</h1>
            <div className='movie__main'>
                {tvseries.map(tv => (
                    <TvSeriesCard
                        key={tv.id}
                        tv={tv}
                    />
                ))}
            </div>
        </div>
    );
}

export default TvSeriesPage;
