import React, { Component } from 'react'
import List from './container/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginacionMovi from './components/PaginacionMovi'
// import axios from 'axios'


class App extends Component {

  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-dark bg-dark border-bottom border-white">
          <a href="/" className="navbar-brand">
            MoviApp Black
          </a>
        </nav>
        <List></List> */}
        <PaginacionMovi></PaginacionMovi>
    </div>
    )
  }

}

export default App;