const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RecipeRoutes = require("./Routes/recipes.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/recipes", RecipeRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to the DB Successfully."))
  .catch((error) => console.log("Connection Failed.",error));

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server started listening on port: => ${port}`);
});
