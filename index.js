const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const mongoURI = process.env.DB
const userRoutes = require("./routes/userRoutes");


app.use(express.json());
app.use(cors());


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });