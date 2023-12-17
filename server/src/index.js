const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(DB)
  .then(() =>
    console.log(
      "---------------------- DB Connection Successful! ----------------------"
    )
  )
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);

app.listen(PORT, (err) => {
  console.log("Server listening on : ", PORT);
});
