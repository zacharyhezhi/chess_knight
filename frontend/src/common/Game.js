import React from 'react';
import Board from './Board';
import Chess from '../class/Chess';
import Node from '../class/Node';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            knight: [0,0],
            destination: [7,7]
        }
    }

    startGame = () => {
        const knight = this.getRandomPosition(); 
        const destination = this.getRandomPosition();
        this.setState({
            knight,
            destination
        });
    }

    getRandomPosition = () => {
        return [this.getRandomInt(), this.getRandomInt()];
    }

    getRandomInt = () => {
        const max = 8;
        return Math.floor(Math.random() * Math.floor(max));
    }

    move = (x,y) => {
        this.setState({
            knight:[x, y]
        })
    }

    help = () => {
        //find steps to destination and return all steps
        const { knight, destination} = this.state;
        const chess = new Chess();
        const knightNode = new Node(knight[0], knight[1]);
        const destNode = new Node(destination[0], destination[1]);
        const steps = chess.calcSteps(knightNode, destNode);
        //steps is an array, e.g [{0,1}, {1,2}]
        // map out all elements in steps in board   
        let count = 0;
        const self = this;
        function myTimer() {
        //call move function to next step
            self.move(steps[count].x, steps[count].y) ;
            count++;
            if(count >= steps.length) {
            clearInterval(myInterval);
            }
        }

        const myInterval = setInterval(myTimer, 1000);

    }

    render() {
        const { knight, destination} = this.state;
        return (
            <>
                <Board 
                    knight={knight}
                    destination={destination} 
                    move={(x,y) => this.move(x,y)}
                    tabIndex="0"/>
                <section>
                    <button 
                        className="primary"
                        onClick={this.startGame}
                        // onKeyPress={/** TODO add onKeyPress */}
                        arial-label="start game button"
                        tabIndex="1"
                        >
                        start game
                    </button>
                    <button 
                        className="secondary"
                        onClick={this.help}
                        arial-label="help button"
                        tabIndex="2">
                        help
                    </button>
                </section>
            </>
        )
    }
}



export default Game;