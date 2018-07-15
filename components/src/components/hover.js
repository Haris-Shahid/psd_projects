import React, { Component } from 'react';

class Hover extends Component {
    state = {
        hovered: false
    }

    onMouseEnter = () => {
        this.setState({
            hovered: true
        })
    }
    onMouseLeave = () => {
        this.setState({
            hovered: false
        })
    }

    render(){
        return this.props.children({
            hovered: this.state.hovered,
            bind: {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
            }
        })
    }
}

export default Hover;