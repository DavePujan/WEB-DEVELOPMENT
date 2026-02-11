// app.listen
// app.get
// app.post
// app.put
// app.delete
// app.use
// app.set
// app.route
// app.all


import express from 'express'

const app = express()

// app.use() — Middleware (VERY IMPORTANT)
// Purpose - Runs middleware functions.
// Middleware = function that runs before final response.
// Example (Logger)
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
// Example (JSON parser)
app.use(express.json());


// app.use(express.static()) — Serve Static Files
// Purpose - Serve CSS, JS, images.
// Syntax - 
app.use(express.static("public"));
// Now /public/style.css can be accessed.



// app.get() — Handle GET Requests
// Purpose - Used to fetch data.
// Syntax - app.get(path, callback);
app.get('/', (req, res) => {
  res.send('Hello World')
})


// app.post() — Handle POST Requests
// Purpose - Used to send data to server (forms, APIs).
// Syntax - app.post(path, callback);
app.post("/login", (req, res) => {
  res.send("Login Successful");
});


// app.put() — Update Data
// Purpose - Used to update existing data.
// Syntax - app.put(path, callback);
app.put("/user", (req, res) => {
  res.send("User updated");
});


// app.delete() — Delete Data
// Purpose - Used to delete resources.
// Syntax - app.delete(path, callback);
app.delete("/user", (req, res) => {
  res.send("User deleted");
});


// app.set() — Set App Settings
// Purpose - Configure settings.
// Syntax - app.set(name, value);
app.set("view engine", "ejs");
// Common settings:
// view engine
// trust proxy
// port



// app.route() — Chain Routes
// Purpose - Group routes for same path.
// Syntax - 
app.route("/user")
  .get((req, res) => res.send("Get User"))
  .post((req, res) => res.send("Add User"));
// Cleaner code.


// app.all() — Handle All HTTP Methods
// Purpose - Runs for GET, POST, PUT, DELETE etc.
// Syntax - 
app.all("/any", (req, res) => {
  res.send("Works for all methods");
}); 


// app.listen() — Start the Server
// Purpose - Starts your server and listens for requests.
// app.listen(port, callback);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})