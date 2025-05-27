const eventName = "Music Fiesta";
const eventDate = "2025-06-10";
let availableSeats = 50;

const eventInfo = `${eventName} is scheduled on ${eventDate} with ${availableSeats} seats.`;
console.log(eventInfo);

availableSeats--;
console.log(`Seats remaining: ${availableSeats}`);
