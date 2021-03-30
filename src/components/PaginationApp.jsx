import React from 'react';
import './paginacion.css'

const PaginationApp = (props) =>{
    const PageLinks = []

    for(let i =1; i<= props.pages + 1; i++){
        let active = props.currentPage == 1 ? 'active' : '';

        PageLinks.push(<li className={`active ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="">
                    <ul className="pagination mt-4">
                        {props.currentPage > 1 ? <li className={`active `}  onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Preview</a></li> : ''}
                        {PageLinks}
                        {props.currentPage < props.pages + 1 ? <li className={`active `}  onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PaginationApp