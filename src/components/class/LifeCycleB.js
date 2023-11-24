import React, { Component } from 'react'

export default class LifeCycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Sangeetha"
        }
        console.log("LifeCycleB constructor")
    }


    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps", state.name)
        return state.name
    }


    render() {
        console.log("LifeCycleB render")
        return (
            <div>LifeCycleB</div>
        )
    }



    componentDidMount() {
        console.log("LifeCycleB componentDidMount")

        fetch("https://6541cd35f0b8287df1fee5de.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
}
