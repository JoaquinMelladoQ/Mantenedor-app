import React, { Component } from 'react'

export default class UserForm extends Component {

    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            
            e.target.reset()
        }

    }

    render() {
        const { errors } = this.state
        return(
             <form onSubmit={this.handleSubmit} >
                 <input placeholder="nombre" name="name" onChange={this.handleChange} />
                 {errors.name && <p>{errors.name}</p>}
                 <input placeholder="email" name="email" onChange={this.handleChange} />
                 {errors.name && <p>{errors.name}</p>}
                 <input placeholder="website" name="website" onChange={this.handleChange} />
                 {errors.name && <p>{errors.name}</p>}
                 <input type="submit" value="Enviar" />
             </form>
        )
    }
}