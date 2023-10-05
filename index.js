const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/post");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api", todoRoutes);

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("connected to MongoDB"))
  .catch((error) => console.log(error));

app.listen(8000, function () {
  console.log("server is running!");
});
