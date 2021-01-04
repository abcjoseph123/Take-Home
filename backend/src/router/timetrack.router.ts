/** Package imports */
import { Router } from "express";
import { TimetrackController } from "../controller/timettrack.controller";

/** Variables */
export const timetrackRouter: Router = Router({ mergeParams: true });

/** Routes */

/** Post */
timetrackRouter.post("/", TimetrackController.createTimetrack);

/** Get */
timetrackRouter.get("/", TimetrackController.getAllTrackedtimes);
timetrackRouter.get("/new", TimetrackController.getTimeNewFirst);
timetrackRouter.get(
  "/searchdescr/:description",
  TimetrackController.getEntryByDescription
);
