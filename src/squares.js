import React, { Component } from 'react';

class Squares extends Component{

    handleClick = (index) => {
        this.props.squareLocation(this.props.index)
        this.props.clickCounter(this.props.counter)
    }

    render(){
        return(
            <div>
            <button 
                class = "Squares" 
                onClick = { this.handleClick }
                disabled= { this.props.counter === 0 || this.props.clicked }> {this.props.value} </button>
            </div>
        )
    }
}

export default Squares;
