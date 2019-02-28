import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Engine from './Engine/Engine';
import GameObject from './Engine/GameObject/GameObject';
import RectDrawable from './Game/RectDrawable';

class App extends Component {
    private engine: Engine | null = null;

    componentDidMount() {
        const canvas = document.getElementById('space') as HTMLCanvasElement;
        this.engine = new Engine(canvas);
        const squares = new RectDrawable();
        const object = new GameObject();
        object.addComponent(squares);
        this.engine.addGameObject(object);
        this.engine.start();
    }

    render() {
        return (
        <div className="App">
            <div className="App-header">
                <canvas id='space' width={500} height={500}>
                </canvas>
            </div>
        </div>
        );
    }
}

export default App;
