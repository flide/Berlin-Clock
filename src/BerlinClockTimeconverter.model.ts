import {TimeConverter} from './TimeConverter.interface';
import {BerlinClock} from './BerlinClock.model';

export class BerlinClockTimeConverter implements TimeConverter {
	convertTime(): string {
		let time: Date = new Date();
		let berlinClock: BerlinClock = new BerlinClock();
		berlinClock.setHours(time.getHours());
		berlinClock.setMinutes(time.getMinutes());
		berlinClock.setSeconds(time.getSeconds());
		return berlinClock.toString();
	}
}
