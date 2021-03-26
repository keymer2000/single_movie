import React from 'react'

class Card extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }


    async componentDidMount(){
       const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=ffca9d73065c2e5ebe029a05fb3a43e3')
        const resJSON = await res.json()
        this.setState({data: resJSON})
    }
    render(){
        return(
            <div>
                <h1>Hola mundo</h1>
            </div>
        )
    }
}

export default Card;