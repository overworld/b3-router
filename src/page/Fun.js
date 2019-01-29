import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VeryFunny from './veryFunny';

class Fun extends Component {



    render() {
        return (
            <div className="Fun">
                <Link to={`${this.props.match.url}/very-funny`}>SUPER PAGE</Link>
                <Route path={`${this.props.match.path}/very-funny`} component={VeryFunny} />

            </div>
        );
    }
}

export default Fun;
