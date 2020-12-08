import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import UserForm from './Components/UserForm'
import ViewList from './Components/ViewList'

class App extends Component {

    state = {
      data: [],
      ruta: 'lista',
    }

    constructor() {
      super()

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => this.setState({ data }))
    }

    render() {
      console.log(this.state)
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

