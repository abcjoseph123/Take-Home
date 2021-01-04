import { NextFunction, Request, Response, response, json } from "express";
import { Repository, getRepository } from "typeorm";
import { Timetrack } from "../entity/Timetrack";
import { validate, IsBoolean, IsBooleanString } from "class-validator";
import { time } from "console";

export class TimetrackController {
  public static async getAllTrackedtimes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const timetrackRepository: Repository<Timetrack> = getRepository(Timetrack);
    try {
      const timetracks: Timetrack[] = await timetrackRepository.find();
      res.send({ status: "ok", data: timetracks });
    } catch (error) {
      res.status(404).send({ status: "not found" });
    }
  }

  /**
   * Create a new Timetrack
   * Requires, description and tracked time
   * Return 200 Ok on Success
   * Return 400 bad request on validate fail
   *
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next NextFunction
   * @returns {Promise<void>}
   */
  public static async createTimetrack(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let { description, duration } = req.body;
    let timetracked = new Timetrack();

    timetracked.description = description;
    timetracked.duration = duration;

    const errors = await validate(timetracked);
    if (errors.length > 0) {
      res.status(400).send({ status: "bad_request" });
      return;
    }
    try {
      const timetrackRepository: Repository<Timetrack> = getRepository(
        Timetrack
      );
      const createdTimetrack: Timetrack = await timetrackRepository.save(
        timetracked
      );

      res.send({ status: "ok", data: createdTimetrack });
    } catch (error) {
      res.status(400).send({ status: "bad_request" });
    }
  }

  /**
   * Get all entrys from newest to oldest
   * visibility must be true
   * Return 200 Ok on Success
   * Return 404 not_found on fail
   *
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next NextFunction
   * @returns {Promise<void>}
   */
  public static async getTimeNewFirst(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const timetrackRepository: Repository<Timetrack> = getRepository(Timetrack);
    try {
      const time: Timetrack[] = await timetrackRepository.query(
        `SELECT * from timetrack order by createdAt desc;`
      );
      res.send({ status: "ok", data: time });
    } catch (error) {
      res.status(404).send({
        status: "not_found",
      });
    }
  }

  /**
   * Get all entrys created by a certain description
   * Return 200 Ok on Success
   * Return 404 not_found on fail
   * @param {Request} req Request
   * @param {Response} res Response
   * @param {NextFunction} next NextFunction
   * @returns {Promise<void>}
   */
  public static async getEntryByDescription(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const timetrackDescription = req.params.description;
    const timetrackRepository: Repository<Timetrack> = getRepository(Timetrack);
    try {
      const time: Timetrack[] = await timetrackRepository.query(
        `SELECT * from timetrack where description=?`,
        [timetrackDescription]
      );

      res.send({ status: "ok", data: time });
    } catch (error) {
      res.status(404).send({
        status: "not_found",
      });
    }
  }
}
