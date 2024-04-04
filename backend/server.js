require("dotenv").config();

const mongoose = require("mongoose");

const express = require("express");
const bidRoutes = require("./routes/bids");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/bids", bidRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
