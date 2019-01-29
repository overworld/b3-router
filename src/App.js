import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Fun from "./page/Fun";
import About from "./page/About";


class App extends Component {


    constructor() {
        super()

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li>
                            <Link to={"/fun"}>Fun </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <Route path="/Fun" component={Fun}/>
                        <Route path="/About" component={About}/>
                    </ul>
                </div>
            </Router>
        );
    }
}

export default App;
