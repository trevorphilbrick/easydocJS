require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const test = require("./routes/test");

app.use(express.json());
app.use("/", test);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongodDB connected..!");
  } catch (err) {
    console.log(err.message);
  }
};

connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
