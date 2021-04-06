import React from 'react'
import Movie from './Movie'

const MovieList = (props) =>{
    return(
        <div className="container "  >
            <div className="row "  >
                <div className="col-sm-12 col-md-12 col-lg-12"   >
                    {
                        props.movies.map((movie, i) =>{
                            return(
                                <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path}  />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList