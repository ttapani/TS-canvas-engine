import EngineContext from './EngineContext';
import GameObject from './GameObject/GameObject';


export class Engine {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null = null;

    private lastFrame: number;
    private deltaTime: number;

    private engineContext: EngineContext = new EngineContext(this);
    private gameObjects: GameObject[] = [];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        if(this.canvas.getContext) {
            this.context = canvas.getContext('2d');
        }
        else {
            throw Error;
        }
        this.lastFrame = 0;
        this.deltaTime = 0;
        this.start = this.start.bind(this);
        this.draw = this.draw.bind(this);
        this.updateDeltaTime = this.updateDeltaTime.bind(this);
    }

    public getCanvasContext() {
        return this.context;
    }

    public getDeltaTime() {
        return this.deltaTime;
    }

    public start() {
        this.lastFrame = Date.now();
        requestAnimationFrame(this.draw);
    }

    public addGameObject(object: GameObject) {
        object.attachToEngine(this.engineContext);
        this.gameObjects.push(object);
    }

    private draw() {
        this.updateDeltaTime();
        this.engineContext.refreshContext();
        if(this.context) {
            this.gameObjects.forEach(object => object.updateComponents());
            requestAnimationFrame(this.draw);
        }
    }

    private updateDeltaTime() {
        this.deltaTime = Date.now() - this.lastFrame;
        this.lastFrame = Date.now();
    }
}


















export default Engine;