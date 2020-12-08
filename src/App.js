import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import UserForm from './Components/UserForm'
import ViewList from './Components/ViewList'

class App extends Component {

    state = {
      data: [],
      ruta: 'formulario',
    }

    constructor() {
      super()

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => this.setState({ data }))
    }

    seleccionaUsuario = id => {
      this.setState({
        ruta: 'formulario',
        usuarioSeleccionado: id,
      })
    }

    nuevoUsuario = () => {
      this.setState({ ruta: 'formulario' })
    }

    render() {
      const { ruta, data } = this.state
      return(
        <div className="App">
          { ruta === 'lista' && <ViewList
            nuevoUsuario={this.nuevoUsuario}
            handleClick={this.seleccionaUsuario}  data={data} /> }
          { ruta === 'formulario' && <UserForm /> }
        </div> 
      )
    }
}

export default App;

