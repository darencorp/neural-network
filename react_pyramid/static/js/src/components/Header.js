import React from "react"

import NavBarButton from "./NavBarButton"

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <nav class="uk-navbar-container">
                    <div class="uk-navbar-center uk-grid">
                        <ul class="uk-navbar-nav uk-width-2-5 uk-flex-center">
                            <NavBarButton to="/" text="Home"/>
                            <NavBarButton to="preform" text="Preform"/>
                            <NavBarButton to="about" text="About"/>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
