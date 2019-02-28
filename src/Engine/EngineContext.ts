import Engine from './Engine';


class EngineContext {
    private engine: Engine;
    public canvasContext?: CanvasRenderingContext2D;
    public deltaTime: number = 0;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    public getCanvasContext() {
        const canvasContext = this.engine.getCanvasContext();
        if(canvasContext) {
            this.canvasContext = canvasContext;
        }
        else {
            throw Error;
        }
    }

    public getDeltaTime() {
        this.deltaTime = this.engine.getDeltaTime();
    }

    public refreshContext() {
        this.getCanvasContext();
        this.getDeltaTime();
    }
}

export default EngineContext;