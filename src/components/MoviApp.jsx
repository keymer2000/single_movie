import React, {Component} from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import SearchArea from './SearchArea'


class MoviApp extends Component{

    constructor(){
        super()
        this.state={
            movies:[],
            SearchTerm: ''
        }
        this.apiKey = process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.SearchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({movies: [...data.results]})
        })
    }

    handleChange=(e)=>{
        this.setState({SearchTerm: e.target.value})
    }
    render(){
        return(
            <div>
                <Nav></Nav>
                <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default MoviApp