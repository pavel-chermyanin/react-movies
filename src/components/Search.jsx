import React, { Component } from 'react'
import { useState } from 'react'

const Search = (props) => {
    const [search, setSearch] = useState('avengers')
    const [type, setType] = useState('all')

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            props.updateMovies(search, type)
        }
    }
    const handleSearch = () => {
        props.updateMovies(search, type)
    }
    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        props.updateMovies(search, e.target.dataset.type)
    }
    return (
        <>
            <div className="row search-panel">

                <input
                    onKeyPress={handleKeyPress}
                    onChange={handleSearchChange}
                    value={search}
                    placeholder="search"
                    id="first_name"
                    type="search"
                    className="validate search-input"
                />
                <button
                    onClick={handleSearch}
                    className="search-btn waves-effect waves-light btn">Search
                </button>
            </div>
            <div className='filter-panel'>
                <label>
                    <input
                        checked={type === 'all'}
                        onChange={handleFilter}
                        data-type="all"
                        className="with-gap"
                        name="type"
                        type="radio" />
                    <span>All</span>
                </label>
                <label>
                    <input
                        checked={type === 'movie'}
                        onChange={handleFilter}
                        data-type="movie"
                        className="with-gap"
                        name="type"
                        type="radio" />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        checked={type === 'series'}
                        onChange={handleFilter}
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
export { Search }