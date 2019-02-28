import EngineContext from '../EngineContext';


abstract class Component {
    protected context: EngineContext | null;

    constructor() {
        this.context = null;
    }

    public setContext(context: EngineContext) {
        this.context = context;
    }

    abstract start(): void;
    abstract update(): void;
}

export default Component;