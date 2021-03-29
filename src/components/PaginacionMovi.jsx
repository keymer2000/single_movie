import React, { useEffect, useState } from 'react'
import './style.css'



const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e6c0030a"


function PaginacionMovi() {

    const [data, setData] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    //estos 3 estados definen el numero minimo y maximo de la paginacion con un limite de item
    const [pageNumberLimit, setpageNumberLimit] = useState(2);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);




    const handleClick = (event) =>{
        setcurrentPage(Number(event.target.id));
    };

    const pages =[];
    for(let i=1; i<=Math.ceil(data.length/itemsPerPage);i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number)=>{
       
        if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
            return(
                <li key={number} id={number} onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        }else{
            return null;
        }
    });




    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        fetch(`${url}&s=batman`)
            .then((response) => response.json())
            .then((json) => setData(json.Search))
            // .then((json) => console.log(json))
    }, []);

    const handleNextbtn= ()=>{
        setcurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumberLimit){
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePreviewbtn= ()=>{
        setcurrentPage(currentPage - 1);

        if((currentPage - 1)%pageNumberLimit==0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn= <li onClick={handleNextbtn} >&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageDecrementBtn= <li onClick={handlePreviewbtn} >&hellip;</li>
    }
    
    return (
        <>
           <br/>
            {renderData(currentItem)} <br/>
            <ul className="pageNumbers">
                <li>
                    <button onClick={handlePreviewbtn} 
                    disabled={currentPage== pages[0] ? true : false}>Preview</button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button onClick={handleNextbtn}
                    disabled={currentPage== pages[pages.length - 1] ? true : false}>Next</button>
                </li>
            </ul>
        </>
    )
}

//renderizacion en pantalla de la card de cada pelicula

const renderData = data => {
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    data.map((movie, i) => {
                        return (
                            <div className="col-md-4 mb-4" key={i} >
                                <div className="card">
                                    <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                                    <div className="card-body">
                                        <h4>{movie.Title} {movie.Year}</h4>
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

export default PaginacionMovi
