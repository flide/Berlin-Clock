import {Color} from './Color.enum';

export class Lamp {

    private color: Color;
    private on: boolean;

    constructor(color: Color ) {
        this.color = color;
        this.on = false;
    }

    public toString(): String {
        if (this.on) {
            return this.color.toString();
        } else {
            return "O";
        }
    }

    public turnOn(): void {
        this.on = true;
    }

    public turnOff(): void {
        this.on = false;
    }

    public setColor(color: Color): void {
        this.color = color;
    }

    public getColor(): Color {
        return this.color;
    }

    public isOn(): boolean {
        return this.on;
    }
}
