import {BerlinClockTimeConverter} from './BerlinClockTimeConverter.model';

let date = new Date();
console.log (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
console.log (new BerlinClockTimeConverter().convertTime());
