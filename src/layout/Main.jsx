import { Movies } from "../components/Movies"
import { Component } from "react/cjs/react.development";



class Main extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=868a5650&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }
  render() {
    const { movies } = this.state
    return (
      <main className="content container">
        {
          movies.length ? (
            <Movies movies={movies} />
          ) : <h3>Loading...</h3>
        }

      </main>
    )
  }
}

export { Main }