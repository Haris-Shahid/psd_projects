import React, { Component } from 'react';

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.initialState
        }
        this.setState = this.setState.bind(this);
    }
    render(){
        return this.props.children({
            state: this.state,
            setState: this.setState
        });
    }
}

export default State;