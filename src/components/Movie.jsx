import React from 'react'

const Movie = (props) =>{
    return(
        <div className="col-lg-12 ">
            <div className="card">
                <div className="card-img-top">
                    {
                        props.image == null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-img.jpg'}  alt="card image" style={{width:"100%", height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:360}} />
                    }
                </div>

            </div>
        </div>
    )

}

export default Movie