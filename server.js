require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const router = require("./routes/index");

mongoose.connect(
  process.env.MONGODB_URI,
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

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    // no larger than 5mb.
    fileSize: 5 * 1024 * 1024,
  },
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(multerMid.single("file"));

app.use("/", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
