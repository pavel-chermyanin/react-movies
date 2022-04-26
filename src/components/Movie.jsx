import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Poster: poster,
        Year: year,
        imdbID: id,
        Type: type
    } = props;

    return (
        <div id={id} className="movie card">
            <div className="card-image">
                {
                    poster === 'N/A' ?
                        <img src={`https://via.placeholder.com/300x400.png?text=${title}`} /> :
                        <img src={poster} alt={title} />

                }
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>
                    {year}
                    <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    )
}

export { Movie };