const event = { name: "Yoga Session", date: "2025-08-01", seats: 20 };

function register(e = { seats: 0 }) {
  e.seats--;
}

const { name, date } = event;

const newEvents = [...events];
