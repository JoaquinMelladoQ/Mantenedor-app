import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import UserForm from './Components/UserForm'
import ViewList from './Components/ViewList'

class App extends Component {

    state = {
      ruta: 'lista',
    }

    constructor() {
      super()

      axios.get('https://jsonplaceholder.typicode.com/users')

    }

    render() {
      const { ruta } = this.state
      return(
        <div className="App">
          { ruta === 'lista' && <ViewList /> }
          { ruta === 'formulario' && <UserForm /> }
        </div> 
      )
    }
}

export default App;

