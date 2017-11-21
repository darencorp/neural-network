import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "../pages/Home";
import Preform from "../pages/Preform";
import Explain from "../pages/Explain"
import About from "../pages/About";

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
                    <Route path='/explain' component={Explain}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </div>
        )
    }
}
