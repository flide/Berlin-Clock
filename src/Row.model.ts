import {Lamp} from './Lamp.model';
import {Color} from './Color.enum';

export class Row {
	private lamps: Array<Lamp>;

	constructor(lampCount: number, color: Color ) {
		this.lamps = new Array();

		for (let i: number = 0; i < lampCount; i++) {
			this.lamps.push(new Lamp(color));
		}
	}

	public turnOn(lampNumber: number):void  {
		if (lampNumber >= 0 && lampNumber <= this.lamps.length) {
			for (let i: number = 0; i < this.lamps.length; i++) {
				if (i < lampNumber) {
					this.lamps[i].turnOn();
				} else {
					this.lamps[i].turnOff();
				}
			}
		}
	}

	public toString(): String  {
		let sb: string = "";
		for (let lamp of this.lamps) {
			sb = sb + lamp.toString();
		}
		return sb;
	}

	public changeColor(color: Color, ...lampNumbers: number[]): void {
		for (let lampNumber of lampNumbers) {
			if (lampNumber > 0 && lampNumber < this.lamps.length) {
				this.lamps[lampNumber - 1].setColor(color);
			}
		}
	}

	public getLamps(): Array<Lamp> {
		return this.lamps;
	}
}
