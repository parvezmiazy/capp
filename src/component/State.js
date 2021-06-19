import React, { Component } from 'react'

export default class State extends Component {

    constructor(){
        super()

        this.state = {
            name:"Parvez Hasan",
            age : 26
        }

    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p> <br/>
                <p>{this.state.age}</p>
            </div>
        )
    }
}
