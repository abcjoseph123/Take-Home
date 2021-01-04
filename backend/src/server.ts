/** Package imports */
import express from "express";
import "reflect-metadata";
import { DatabaseConnection } from "./util/database";
import * as bodyParser from "body-parser";
import { globalRouter } from "./router/global.router";

/** Variables */
const app: express.Application = express();

/** Global middleware */
app.use(bodyParser.json());

/** Routes */
app.use("/backend", globalRouter);

/** Start our server */
DatabaseConnection.connect()
  .then(() => {
    app.listen(process.env.API_PORT, () => {
      console.log(`Server is running on port ${process.env.API_PORT}...`);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
