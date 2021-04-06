import React, { Component } from 'react'
// import List from './container/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviApp from './components/MoviApp'
// import PaginacionMovi from './container/PaginacionMovi'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from "react-router-dom";



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
        {/* <MoviApp></MoviApp> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MoviApp} />
          </Switch>
    </BrowserRouter>
    </div>
    )
  }

}

export default App;