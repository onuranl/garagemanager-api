require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

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

// const uploadImage = require("./helpers/upload-image");

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

// app.post("/uploads", async (req, res, next) => {
//   try {
//     const myFile = req.file;
//     const imageUrl = await uploadImage(myFile);

//     res.status(200).json({
//       message: "Upload was successful",
//       data: imageUrl,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

app.use("/", router);

app.listen(8000, () => {
  console.log("listening on 8000");
});
