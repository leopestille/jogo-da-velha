import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* "Square" é uma classe de componente porque estende o React.Component. */
class Square extends React.Component {
    render() {
        return (
            <button className='square'>{/* TODO */}</button>
        );
    }
}

/* O Board renderiza 9 quadrados e os quadrados renderizam um X ou um O quando clicados. */
class Board extends React.Component {
    renderSquare(i) {
        return <Square />
    }

    render() {
        const status = 'Next Player: X';
        
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

/* O componente Game renderiza um Board com valores de placeholder por enquanto. */
class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}