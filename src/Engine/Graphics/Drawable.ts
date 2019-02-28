import EngineContext from '../EngineContext';


interface Drawable {
    draw: (context: EngineContext) => void;
}

export default Drawable;