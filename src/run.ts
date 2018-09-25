import {BerlinClockTimeConverter} from './BerlinClockTimeConverter.model';

let date: Date = new Date();
console.log (date.getHours() + " " + date.getMinutes() + " " + date.getSeconds());
console.log (new BerlinClockTimeConverter().convertTime('aoeu'));
