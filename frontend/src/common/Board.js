import React from 'react';
import { KnightWhite,  Destination, Knight, DestinationWhite } from './Icon';
import './Board.scss';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          boardSize: 8,
          boardElements: []
        }
    }

    componentDidMount() {
      this.init();
    }

    init = () => {
      this.setState({
        boardElements: [0,1,2,3,4,5,6,7]
      })
    }

    isKnight = (x, y) => {
      // console.log(this.props.knight);
      const { knight } = this.props;
      return x === knight[0] && 
             y === knight[1] && 
             ((x%2 === 0 && y%2 === 0) || 
             (x%2 === 1 && y%2 === 1)) ;
    }

    isKnightWhite = (x, y) => {
      const { knight} = this.props;
      return x === knight[0] && 
             y === knight[1] && 
             ((x%2 === 0 && y%2 === 1) || 
             (x%2 === 1 && y%2 === 0));
    }

    isDestination = (x, y) => {
      const { destination } = this.props;
      return x === destination[0] &&
             y === destination[1] &&
             ((x%2 === 0 && y%2 === 0) || 
             (x%2 === 1 && y%2 === 1));
    }

    isDestinationWhite = (x, y) => {
      const { destination } = this.props;
      return x === destination[0] &&
             y === destination[1] &&
             ((x%2 === 0 && y%2 === 1) || 
             (x%2 === 1 && y%2 === 0));
    }

    moveKnight = (x, y) => {
      // prevent moving out of board
      if (x<0 || x>7 || y<0 || y>7) return; 


      if (this.isValidMove(x, y)){
          const { move } = this.props; 
          move(x,y);
      }
    }

    isValidMove = (x, y) => {
      //all possible movements
      const row = [1,1,-1,-1,2,2,-2,-2];
      const col = [2,-2,2,-2,1,-1,1,-1];
      const { knight } = this.props;

      for(let i = 0; i < row.length; i++) {
        if(knight[0] + row[i] === x && knight[1] + col[i] === y) {
          return true;
        }
      }

      // TODO add UI notification
      console.error('not valid move');
      return false;
    }

    render() {
        const { boardElements } = this.state;
        const { knight, destination } = this.props;
        console.log(knight, destination);
        return (
          <ul>
            {boardElements.map(x => 
              <li key={x}>
                <ul>
                  {boardElements.map(y => 
                    <li key={`${x}-${y}`} 
                        onClick={() => this.moveKnight(x, y)}>
                      {this.isKnight(x, y) && <Knight />}
                      {this.isKnightWhite(x, y) && <KnightWhite />}
                      {this.isDestination(x, y) && <Destination />}
                      {this.isDestinationWhite(x, y) && <DestinationWhite />}
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        ) 
    }
}

export default Board;