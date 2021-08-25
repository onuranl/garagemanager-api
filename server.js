require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/index");

mongoose.connect(
  process.env.DATABASE_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected to the database");
  }
);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

app.listen(8000, () => {
  console.log("listening on 8000");
});
