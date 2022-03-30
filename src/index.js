const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const app = express();
const port = process.env.PORT;

//! Convert incoming JSON to object
app.use(express.json());

//! Load route in app
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
