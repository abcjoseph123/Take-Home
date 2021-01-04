/** Package imports */
import { Router } from "express";
import { timetrackRouter } from "./timetrack.router";

/** Variables */
export const globalRouter: Router = Router({ mergeParams: true });

/** Routes */
globalRouter.use("/timetrack", timetrackRouter);
