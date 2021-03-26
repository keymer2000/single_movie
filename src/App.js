import React, { Component } from 'react'
import List from './container/List'
import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'


class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark border-bottom border-white">
          <a href="/" className="navbar-brand">
            MoviApp Black
          </a>
        </nav>
        <List></List>
        <nav aria-label="Page navigation example" className="mt-3">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    )
  }

}

export default App;