$('#registerBtn').click(() => {
  alert("Registered via jQuery");
  $('.event-card').fadeIn();
});

setTimeout(() => $('.event-card').fadeOut(), 3000);
