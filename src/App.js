import React, { Component } from 'react'
import axios from 'axios'
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

    seleccionaUsuario = id => {
      this.setState({
        ruta: 'formulario',
        usuarioSeleccionado: id,
      })
    }

    agregarNuevoUsuario = usuario => {
      axios.post('https://jsonplaceholder.typicode.com/users', usuario)
        .then(({ data }) => {
          const newData = this.state.data.concat(data)
          this.setState({
            data: newData,
            ruta: 'lista',
          })
        })
    }

    nuevoUsuario = () => {
      this.setState({ ruta: 'formulario' })
    }

    render() {
      const { ruta, data, usuarioSeleccionado } = this.state
      const valoresIniciales = usuarioSeleccionado && data.find(x => x.id === usuarioSeleccionado)
      
      return(
        <div className="App">
          { ruta === 'lista' && <ViewList
            nuevoUsuario={this.nuevoUsuario}
            handleClick={this.seleccionaUsuario}  data={data} /> }
          { ruta === 'formulario' && <UserForm
           valoresIniciales={valoresIniciales || {}}
           handleSubmit={this.agregarNuevoUsuario} /> }
        </div> 
      )
    }
}

export default App;

