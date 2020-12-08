import React, { Component } from 'react'

export default class UserForm extends Component {

    state = {}
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }
    render() {
        
        return(
             <form onSubmit={this.handleSubmit} >
                 <input placeholder="nombre" name="name" onChange={this.handleChange} />
                 <input placeholder="email" name="email" onChange={this.handleChange} />
                 <input placeholder="website" name="website" onChange={this.handleChange} />
                 <input type="submit" value="Enviar" />
             </form>
        )
    }
}