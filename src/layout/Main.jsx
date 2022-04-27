import { Movies } from "../components/Movies"
import { Component } from "react/cjs/react.development";
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import Filter from "../components/Filter";


class Main extends Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {

    fetch('http://www.omdbapi.com/?apikey=868a5650&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  updateMovies = (search, type = 'all') => {
    this.setState({ loading: true })
    fetch(`http://www.omdbapi.com/?apikey=868a5650&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
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