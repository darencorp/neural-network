import React from "react"
import {Link} from "react-router-dom"

export default class NavBarButton extends React.Component {

    render() {
        return (
            <li><Link to={this.props.to}>{this.props.text}</Link></li>
        )
    }
}
