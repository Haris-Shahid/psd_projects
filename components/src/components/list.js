import React, { Component } from 'react';

class List extends Component{
    state = {
        list : this.props.initial
    }

push = ( newValue ) => {
    this.setState({
        list: [ ...this.state.list, newValue ]
    })
}
pull = ( fn ) => {
    const newList = this.state.list.filter((listItem, index) => {
        console.log(fn(listItem, index), listItem, index)
        return !fn(listItem, index)
    })

    this.setState({
        list: newList
    })
}

    render(){
        return this.props.children({
            list: this.state.list,
            push: this.push,
            pull: this.pull,
        })
    }
}

export default List;