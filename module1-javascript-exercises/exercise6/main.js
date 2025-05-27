const events = [];

events.push({ name: "Baking Workshop", category: "Workshop" });

const musicEvents = events.filter(event => event.category === "Music");

const formatted = events.map(event => `${event.name} Event`);
