import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
import { StateLess } from './StateLess'
import StateFull from './StateFull'

export default class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Sangeetha"
        }
        console.log("LifeCycleA constructor")
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")

        fetch("https://6541cd35f0b8287df1fee5de.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps", state.name)
        return state.name
    }


    render() {
        console.log("LifeCycleA render")
        return (
            <div>ClassComponent
                <h1>Hi my name is {this.state.name}</h1>
                {/* <LifeCycleB /> */}
                <h1>StateLess</h1>
                <StateLess />
                <StateFull />
            </div>
        )
    }



}
