import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./Home";
import Preform from "./Preform";
import About from "./About";

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/preform' component={Preform}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        )
    }
}
