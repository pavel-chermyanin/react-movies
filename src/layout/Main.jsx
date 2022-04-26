import { Movies } from "../components/Movies"
import { Component } from "react/cjs/react.development";
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'


class Main extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=868a5650&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  updateMovies = (search) => {
    fetch(`http://www.omdbapi.com/?apikey=868a5650&s=${search}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state
    return (
      <main className="content container">
        <Search updateMovies={this.updateMovies}/>
        {
          movies.length ? (
            <Movies movies={movies} />
          ) : <Preloader />
        }

      </main>
    )
  }
}

export { Main }