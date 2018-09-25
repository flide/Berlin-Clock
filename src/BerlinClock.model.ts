import {Lamp} from './Lamp.model';
import {Row} from './Row.model';
import {Color} from './Color.enum';

export class BerlinClock {
	private secondsLamp: Lamp;
	private fiveHoursRow: Row;
	private oneHourRow: Row;
	private fiveMinutesRow: Row;
	private oneMinuteRow: Row;

	constructor() {
		this.secondsLamp = new Lamp(Color.YELLOW);
		this.secondsLamp.turnOn();

		this.fiveHoursRow = new Row(4, Color.RED);
		this.oneHourRow = new Row(4,Color.RED);
		this.fiveMinutesRow = new Row(11, Color.YELLOW);
		this.fiveMinutesRow.changeColor(Color.RED, 3,6,9);
		this.oneMinuteRow = new Row(4, Color.YELLOW);
	}

	public setSeconds(seconds: number): BerlinClock {
		if(seconds%2 === 0) {
			this.secondsLamp.turnOn();
		}else {
			this.secondsLamp.turnOff();
		}

		return this;
	}
	public setHours(hours: number): BerlinClock {
		let fiveHours: number = Math.floor(hours / 5);
		let rest: number = hours % 5;

		this.fiveHoursRow.turnOn(fiveHours);
		this.oneHourRow.turnOn(rest);

		return this;
	}

	public setMinutes(minutes: number): BerlinClock {
		let fiveMinutes: number = Math.floor(minutes / 5);
		let rest: number = minutes % 5;

		this.fiveMinutesRow.turnOn(fiveMinutes);
		this.oneMinuteRow.turnOn(rest);

		return this;
	}

	public getSecondsLamp(): Lamp {
		return this.secondsLamp;
	}

	public getFiveHoursRow(): Row {
		return this.fiveHoursRow;
	}

	public getOneHourRow(): Row {
		return this.oneHourRow;
	}

	public getFiveMinutesRow(): Row {
		return this.fiveMinutesRow;
	}

	public getOneMinuteRow(): Row {
		return this.oneMinuteRow;
	}

	public toString(): string {
		return this.getSecondsLamp().toString() + "\n"
		+ this.getFiveHoursRow().toString() + "\n"
		+ this.getOneHourRow().toString() + "\n"
		+ this.getFiveMinutesRow().toString() + "\n"
		+ this.getOneMinuteRow().toString();
	}
}
