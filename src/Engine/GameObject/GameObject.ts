import EngineContext from '../EngineContext';
import Component from './Component';
import ContextedObject from './ContextedObject';

export class GameObject implements ContextedObject {
    context: EngineContext | null = null;
    public components: Component[];

    constructor() {
        this.components = [];
    }

    attachToEngine(context: EngineContext) {
        this.context = context;
        this.components.forEach(component => component.setContext(this.context!));
    }

    addComponent(component: Component) {
        component.setContext(this.context!);
        this.components.push(component);
    }

    startComponents() {
        this.components.forEach(component => component.start());
    }

    updateComponents() {
        this.components.forEach(component => component.update());
    }
}

export default GameObject;