import React, { Component } from 'react'
// import List from './container/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviApp from './components/MoviApp'
// import PaginacionMovi from './components/PaginacionMovi'
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
        {/* <PaginacionMovi></PaginacionMovi> */}
        <MoviApp></MoviApp>
    </div>
    )
  }

}

export default App;