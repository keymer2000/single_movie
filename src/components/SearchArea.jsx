import React from 'react'

const SearchArea = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-4 p-4">
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar"
                            autoFocus
                            onChange={props.handleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchArea;