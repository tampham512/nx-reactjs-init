import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
console.log(todayStr);
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
    backgroundColor: 'red',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
