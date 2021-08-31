import React, { Component } from 'react'
import DivThree from "./DivThree"
export default class DivTwo extends Component {
    render() {
        return (
            <div>
                <DivThree DivThree= {this.props.DivTwo}/>
            </div>
        )
    }
}
