console.log("Form submission started");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ name: "John" }),
  headers: { "Content-Type": "application/json" },
})
.then(res => res.json())
.then(data => console.log("Success", data));
