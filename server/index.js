const express = require("express");
const app = express();
const compression = require("compression");
const cors = require("cors");

// Middlewares
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Port
const PORT = process.env.PORT || 3001;

app
  .listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  })
  .on("error", (err) => console.log(err));
