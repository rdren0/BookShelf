import React, { Component } from 'react';

export class Search extends Component {
constructor(){
    super();
    this.state={
        query: ''
    }
}
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchCategory(`https://www.googleapis.com/books/v1/volumes?q=+subject:${this.state.query}&projection=lite&orderBy=newest`)
    }

    handleChange = (e) => {
        let { value } = e.target;
        this.setState({query: value})
    }

    render() {
        return (
            <div className="search-bar">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <input id="search-input" onChange={this.handleChange} value={this.state.query}placeholder="...search" className="search-input"/>
                <button className="search-button">Search</button>
            </form>
            </div>
        )
    }
}

export default Search;

