import React, { Component } from 'react'

class Search extends Component {

    state = {
        search: '',
    }


    handleSearchChange = (e) => {
        this.setState({ search: e.target.value })
    }
    handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            this.props.updateMovies(this.state.search)
        }
    }
    handleSearch = () => {
        this.props.updateMovies(this.state.search)
    }
    render() {
        return (
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
        )
    }
}
export { Search }