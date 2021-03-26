import React from 'react'
import Paginacion from '../components/Paginacion'

// import axios from 'axios'


const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e6c0030a"

class List extends React.Component{

    constructor(){
        super();
        this.state={
            data:[],
            searchTem: "",
            error: ""
        }
    }

    async componentDidMount(){
    //    const res = await fetch('./data.json')
        const res = await fetch(`${url}&s=batman`)
        const resJSON = await res.json()
        // console.log(resJSON);
        this.setState({data: resJSON.Search})
    }

    async handleSubmit(e){
        e.preventDefault();
       if (!this.state.searchTem){
            return this.setState({error: 'por favor escribir un texto valido'})
       }

       const res = await fetch(`${url}&s=${this.state.searchTem}`)
       const data = await res.json();

       if (!data.Search){
           return this.setState({error: "no se encontraron resultados"});
       }

       this.setState({data: data.Search, error: ''})
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-4 p-4">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="Buscar"
                            onChange={e => this.setState({searchTem: e.target.value})}
                            value={this.state.searchTem}
                            autoFocus
                            />
                        </form>
                        <p>
                            {this.state.error ? this.state.error : ''}
                        </p>

                    </div>

                </div>
                <div className="row">
                {
                    this.state.data.map((movie, i) => {
                        return(
                            <div className="col-md-4" key={i}>
                                <div className="card">
                                    <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
                                    <div className="card-body">
                                        <h4>{movie.Tile} {movie.Year}</h4>
                                        <p>{movie.Type}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            
        </div>
            
        )
    }
}

export default List;