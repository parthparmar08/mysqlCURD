var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const router = require("./routes/employeeRoutes");

app.use("/api/emp", router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to P@rth Application" });
});

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(
    `.................Server is running on port ${PORT}..................`
  );
});
