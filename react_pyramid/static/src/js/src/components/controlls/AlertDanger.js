import React from "react"
// import Link from "react-router-dom"

export default class AlertDanger extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="alert-danger uk-width-1-6 uk-position-fixed uk-margin-large-top uk-position-top-center uk-text-center">{this.props.text}</div>
        )
    }
}