const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};
//XXoH5GsWCVIldJ6l
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const dbConfig = require("./app/config/db.config.ts");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = dbConfig.url;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// looby route
app.get("/", (req, res) => {
  res.json({ BestProject: "Paul And Liav." });
});

import auth_route = require("./app/routes/auth-routes");
app.use("/auth", auth_route);


// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

