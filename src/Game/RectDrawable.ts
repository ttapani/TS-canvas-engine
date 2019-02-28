import Behavior from '../Engine/Behavior/Behavior';
import Drawable from '../Engine/Graphics/Drawable';
import Component from '../Engine/GameObject/Component';


export class RectDrawable extends Component implements Behavior, Drawable {
    draw() {
        this.context!.canvasContext!.clearRect(0, 0, 500, 500);
        this.context!.canvasContext!.translate(250, 250);
        this.context!.canvasContext!.rotate(45 * Math.PI / 180 * this.context!.deltaTime / 1000);
        this.context!.canvasContext!.translate(-250, -250);
        this.context!.canvasContext!.fillStyle = 'rgb(200, 0, 0)';
        this.context!.canvasContext!.fillRect(80, 80, 50, 50);

        this.context!.canvasContext!.fillStyle = 'rgba(0, 0, 200, 0.5)';
        this.context!.canvasContext!.fillRect(110, 110, 50, 50);
    }

    start() {

    }

    update() {
        this.draw();
    }
}

export default RectDrawable;