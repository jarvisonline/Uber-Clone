const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
connectDB();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  server.listen(port, () => console.log(`Server running on port  ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
