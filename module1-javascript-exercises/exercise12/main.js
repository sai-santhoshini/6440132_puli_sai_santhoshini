function submitRegistration(user) {
  console.log("Submitting...");
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => alert("Registration successful"))
    .catch(err => alert("Failed"));
  }, 2000);
}
