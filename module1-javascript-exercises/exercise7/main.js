const container = document.querySelector("#events");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.date}`;
  container.appendChild(card);
});
