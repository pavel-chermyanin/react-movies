import { Movies } from "../components/Movies"
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main  = () =>  {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  },[])


  const updateMovies = (search, type = 'all') => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
  }

    return (
      <main className="content container">
        <Search updateMovies={updateMovies} />

        {
          loading ? (
            <Preloader />

          ) : <Movies movies={movies} />
        }

      </main>
    )

}

export { Main }