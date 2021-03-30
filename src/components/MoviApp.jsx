import React, {Component} from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import SearchArea from './SearchArea'
import PaginationApp from './PaginationApp'
import MovieInfo from './MovieInfo'


class MoviApp extends Component{
    constructor(){
        super()
        this.state={
            movies:[],
            SearchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null

        }
        this.apiKey = process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.SearchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({movies: [...data.results], totalResults: data.total_results})
        })
    }

    handleChange=(e)=>{
        this.setState({SearchTerm: e.target.value})
    }

    //manejador de la paginacion

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.SearchTerm}&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({movies: [...data.results], currentPage: pageNumber})
        })
    }

    viewMovieInfo = (id) => {
        const filtereMovie = this.state.movies.filter(movie => movie.id == id)

        const newCurrentMovie = filtereMovie.length > 0 ? filtereMovie[0] : null

        this.setState({currentMovie: newCurrentMovie})


    }

    closeMovieInfo = () => {
        this.setState({currentMovie: null})
    }

    render(){
        const numberPage = Math.floor(this.state.totalResults / 20);

        return(
            <div>
                <Nav></Nav>
                {this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
                {this.state.totalResults > 20 && this.state.currentMovie == null ? <PaginationApp pages={numberPage} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
            </div>
        )
    }
}

export default MoviApp