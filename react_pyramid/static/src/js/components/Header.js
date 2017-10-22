import React from "react"

import NavBarButton from "./NavBarButton"

export default class Header extends React.Component {

  handleTitle(e) {
    this.props.changeTitle(e.target.value)
  }

  render() {
    return (
      <header>
        <nav class="uk-navbar-container">
            <div class="uk-navbar-center uk-grid">
                <ul class="uk-navbar-nav uk-width-2-5 uk-flex-center">
                    <NavBarButton text="Home"/>
                    <NavBarButton text="Preform"/>
                    <NavBarButton text="About"/>
                </ul>
            </div>
        </nav>
      </header>
    )
  }
}
