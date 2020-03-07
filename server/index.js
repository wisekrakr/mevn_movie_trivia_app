const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

// Connect to MongoDB Database
db();

// Bodyparser Middleware
app.use(express.json({ extended: false }));

app.use(cors());

app.use("/api/items", require("./routes/api/items"));

// app.get("/register", (req, res) => {
//   console.log(req);
//   res.send({
//     msg: `Registration Complete ${req.body.email}!`
//   });
// });
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
