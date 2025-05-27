function addEvent(events, newEvent) {
  events.push(newEvent);
}

function registerUser(event) {
  if (event.seats > 0) event.seats--;
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function registrationCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const countMusicRegistrations = registrationCounter();

function filterEvents(events, callback) {
  return events.filter(callback);
}
