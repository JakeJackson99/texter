require("dotenv").config();
import express, { json, urlencoded } from "express";
import flash from "flash";
import { connect } from "mongoose";

import homeRouter from "./controller/routes/home";
import authRouter from "./controller/routes/auth";

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(json());
app.use(urlencoded());
app.use(flash());

app.use("/", homeRouter);
app.use("/auth", authRouter);

// Connect to MongoDB & run server

connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((err) => console.log("Could not connect to MongoDB --", err));
