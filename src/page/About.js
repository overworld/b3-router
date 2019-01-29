import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from "./Detail";
import VeryFunny from "./veryFunny";


class About extends Component {



    render() {
        return (
            <div className="about">
                <h1>ABOUT</h1>
                <br/>

                <Link to={`${this.props.match.url}/1`}>Number 1</Link>
                <br/>
                <Link to={`${this.props.match.url}/2`}>Number 2</Link>

                <Route path={`${this.props.match.path}/:id`} component={Detail} />
            </div>
        )
    }
}

export default About;
