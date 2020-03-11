const express = require("express");
const cors = require("cors");
const db = require("../config/db");

const app = express();

// Connect to MongoDB Database
db();

// Bodyparser Middleware
app.use(express.json({ extended: false }));

app.use(cors());

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/questions", require("./routes/api/questions"));
app.use("/api/users", require("./routes/api/users"));

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.send({
//     msg: `Hello Complete ${req.body.email}!!`
//   });
// });

// Serve a static assets if in production
// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
