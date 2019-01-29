import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Detail extends Component {

    constructor()
    {
        super();

        this.state = {
            loading : true
        }
    }

    loadData()
    {
        this.setState({loading : true});
        setTimeout(() =>{
            this.setState({loading : false})
        },3000)
    }

   componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id)
        this.loadData(this.props.match.params.id)

   }

    componentDidMount() {
        this.loadData(this.props.match.params.id)
    }

    render() {
        const view = this.state.loading ? <span>Loading</span> : <span>CONTENT LOADED</span>

        return (
            <div className="about">
                <h3>Requested Param: {this.props.match.params.id}</h3>
                {view}
            </div>
        );
    }
}

export default Detail;
