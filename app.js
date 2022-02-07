const express = require("express");
const router = require("./routes");
const dotenv = require("dotenv");
const connectDB = require("./database");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/event", router);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  connectDB();
});
