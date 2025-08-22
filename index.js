const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3333;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("CONNECTED TO DB SUCCESSFULLY...");
    app.listen(port, () => {
      console.log(`SERVER IS LISTENING AT PORT ${port}...`);
    });
  })
  .catch((error) => console.log("Connection Failed.", error));
