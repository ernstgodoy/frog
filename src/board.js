import React, {Component} from 'react';
import Squares from './squares.js'

class Board extends Component {
    constructor(props) {
        super(props)
            this.state = {
                squares:[ 
                    { value: "💋", clicked: false },
                    { value: "💋", clicked: false },
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }, 
                    { value: "💋", clicked: false }
                ],
                winningSquare : null,
                losingSquare: null,
                counter: 7,
                gameWin: false,
                gameLose: false
        }
    }

    componentDidMount = () => {
        const { squares } = this.state
        let winner = Math.floor(Math.random()*squares.length)
        let loser = Math.floor(Math.random()*squares.length)
        if (winner === loser) {
            loser = Math.floor(Math.random()*squares.length)
        }
        this.setState({ winningSquare: winner, losingSquare: loser })
        console.log(winner, loser)
    }

    squareLocation = (index) =>{
        const { winningSquare, losingSquare, squares } = this.state
        if (index === winningSquare) {
            squares[index].value = "👑"
            this.setState({
                squares: squares,
                gameWin: true
            })
            alert("YOU ARE ROYAL!")        
        } else if (index === losingSquare) {
            squares[index].value = "🐸"
            this.setState ({
                squares: squares,
                gameLose: true
            })
            alert("YOU TURNED INTO A FROG!!")
        } else {
            squares[index].value = "✖️"
            squares[index].clicked = true
        }
    }

    clickCounter = () => {
        let newCount = this.state.counter - 1
        if (this.state.counter > 0 && !this.state.gameOver) {
            this.setState({
                counter: newCount,
            })
        } else {
            alert("No more tries left!")
            this.setState ({
                gameOver: true
            })
        }
    }


    restartGame = () => {
        window.location.reload();
    }


    render(){
        let { squares } = this.state
        let square = squares.map((value, index)=> {
            return (
                <Squares
                    value = { value.value }
                    index = { index }
                    key = { index }
                    squareLocation = { this.squareLocation }
                    clickCounter = { this.clickCounter }
                    counter = { this.state.counter }
                    clicked = { value.clicked }
                />
            )
        })
        return(
            <div id= "container">
                <h2> DON'T KISS THE FROG </h2>
                <br />
                { !this.state.gameWin && !this.state.gameLose &&
                    <div id="gameboard">
                        { square }
                    </div>
                }
                { this.state.gameWin && this.state.counter >= 0 &&
                    <div id="gameOn">
                        <img id="frogWin" 
                            src="https://storage.needpix.com/rsynced_images/frog-prince-1370022_1280.jpg"  
                            alt="winning frog" />
                    </div>
                }
                { this.state.gameLose &&
                    <div id="gameOff">
                        <img id="frogLose" 
                        src="http://c1.peakpx.com/wallpaper/225/674/559/frog-fig-funny-cheeky-wallpaper-preview.jpg"  
                        alt="losing frog" />
                    </div>
                }
                <h1> Tries Left : { this.state.counter } </h1>
                <button onClick = { this.restartGame }> Restart Game </button>
                <br />
                <img id="frog" 
                    src="https://cdn.pixabay.com/photo/2015/08/23/18/53/frogs-903170_960_720.jpg" 
                    alt="romantic frog" />
            </div>
        )
    }
}


export default Board;
