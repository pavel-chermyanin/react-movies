import { Movie } from "./Movie";


function Movies({ movies = []}) {
    return (
        <div className="movies">
            {
                movies.length ?
                    movies.map(movie => {
                        return <Movie
                            key={movie.imdbID}
                            {...movie} />
                    }) : <h4>Not found</h4>
        }
        </div>
    )
}

export { Movies };