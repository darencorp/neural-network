import React from "react"
// import Link from "react-router-dom"

export default class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"uk-button uk-button-" + this.props.buttonStyle}>{this.props.text}</div>
        )
    }
}