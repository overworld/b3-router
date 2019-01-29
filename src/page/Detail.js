import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Detail extends Component {



    render() {
        return (
            <div className="about">
                <h3>Requested Param: {this.props.match.params.id}</h3>;

            </div>
        );
    }
}

export default Detail;
