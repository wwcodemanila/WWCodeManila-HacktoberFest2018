import React, { Component } from "react";

class Hugot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'What\'s your name? Can I call you mine?'
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="quote">{this.state.quote}</div>
        );
    }
}

export default Hugot;
