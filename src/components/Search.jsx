import React, { Component } from 'react'

class Search extends Component {

    state = {
        search: 'alien',
        type: 'series'
    }


    handleSearchChange = (e) => {
        this.setState({ search: e.target.value })
    }
    handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            this.props.updateMovies(this.state.search, this.state.type)
        }
    }
    handleSearch = () => {
        this.props.updateMovies(this.state.search, this.state.type)
    }
    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.updateMovies(this.state.search, this.state.type)
        })
    }
    render() {
        return (
            <>
                <div className="row search-panel">

                    <input
                        onKeyPress={this.handleKeyPress}
                        onChange={this.handleSearchChange}
                        value={this.state.search}
                        placeholder="search"
                        id="first_name"
                        type="search"
                        className="validate search-input"
                    />
                    <button
                        onClick={this.handleSearch}
                        className="search-btn waves-effect waves-light btn">Search
                    </button>
                </div>
                <div className='filter-panel'>
                    <label>
                        <input
                            checked={this.state.type === 'all'}
                            onChange={this.handleFilter}
                            data-type="all"
                            className="with-gap"
                            name="type"
                             type="radio" />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            checked={this.state.type === 'movie'}
                            onChange={this.handleFilter}
                            data-type="movie"
                            className="with-gap"
                            name="type"
                             type="radio" />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            checked={this.state.type === 'series'}
                            onChange={this.handleFilter}
                            data-type="series"
                            className="with-gap"
                            name="type" 
                            type="radio" />
                        <span>Series only</span>
                    </label>
                </div>
            </>
        )
    }
}
export { Search }