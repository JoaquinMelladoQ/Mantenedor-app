import React, { Component } from 'react'

export default class UserForm extends Component {
    handleChange = ({ target }) => {
        console.log(target.name, target.value)
    }
    render() {
        return(
             <form>
                 <input name="name" onChange={this.handleChange} />
                 <input name="email" onChange={this.handleChange} />
                 <input name="website" onChange={this.handleChange} />
             </form>
        )
    }
}