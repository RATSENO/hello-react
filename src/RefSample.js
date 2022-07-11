import { Component } from "react";
import React from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFoucs = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input}></input>
            </div>
        )
    }
}