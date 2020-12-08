import React, { Component } from 'react'

export default class Lista extends Component {
    render() {
        const { data } = this.props
        return(
            <ul>
                <li>Usuario 1 <button>Editar</button></li>
                <li>Usuario 2 <button>Editar</button></li>
            </ul>
        )
    }
}