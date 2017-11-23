import React from "react"
// import Link from "react-router-dom"

export default class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"uk-button uk-button-" + this.props.buttonStyle + " " + this.props.additionalClass}>{this.props.text}</div>
        )
    }
}