import React from "react"

export default class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <a class={"uk-button uk-button-" + this.props.buttonStyle} href={this.props.href}>{this.props.text}</a>
        )
    }
}