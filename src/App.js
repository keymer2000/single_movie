import React, { Component } from 'react'
import List from './container/List'
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'


class App extends Component{

render() {
  return (
      <div>
        <nav className="navbar navbar-dark bg-dark border-bottom border-white">
          <a href="/" className="navbar-brand">
            MoviApp Black
          </a>
        </nav>
        <List></List>
      </div>
  )
}

}

export default App;