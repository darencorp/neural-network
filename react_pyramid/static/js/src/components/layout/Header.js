import React from "react"

import NavBarButton from "../controlls/NavBarButton"

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <nav className="uk-navbar-container">
                    <div className="uk-navbar-center uk-grid">
                        <ul className="uk-margin-large-left uk-navbar-nav uk-width-2-5 uk-flex-center">
                            <NavBarButton to="/" text="Home"/>
                            <NavBarButton to="preform" text="Preform"/>
                            <NavBarButton to="explain" text="How it works"/>
                            <NavBarButton to="about" text="About"/>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
