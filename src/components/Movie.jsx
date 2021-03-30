import React from 'react'

const Movie = (props) =>{
    return(
        <div className="col-sm-12 col-md-6 col-lg-3 mt-4  " style={{display:"inline-block"}} >
            <div className="card" >
                <div className="card-img-top">
                    {
                        props.image == null ? <img src={'https://www.idelcosa.com/img/default.jpg'}  alt="card image" style={{width:"100%", height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:360}} />
                    }
                </div>
                <div className="card-body">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Detalls</a></p>
                </div>

            </div>
        </div>
    )

}

export default Movie