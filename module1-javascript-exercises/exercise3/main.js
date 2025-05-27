const events = [
  { name: "Music Fiesta", date: "2025-06-10", seats: 10 },
  { name: "Art Expo", date: "2023-01-10", seats: 0 },
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name}`);
  }
});

function registerUser(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log("Registration successful");
    } else {
      throw new Error("No seats available");
    }
  } catch (err) {
    console.error(err.message);
  }
}
