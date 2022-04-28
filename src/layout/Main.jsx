import { Movies } from "../components/Movies"
import { Component } from "react/cjs/react.development";
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=alien`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  updateMovies = (search, type = 'all') => {
    this.setState({ loading: true })
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }



  render() {
    const { movies, loading } = this.state
    return (
      <main className="content container">
        <Search updateMovies={this.updateMovies} />

        {
          loading ? (
            <Preloader />

          ) : <Movies movies={movies} />
        }

      </main>
    )
  }
}

export { Main }