import { Request, Response } from "express";
import Stopwatch from "../models/stopwatch";

export const postLaps = async (req: Request, res: Response) => {
  const { user, laps } = req.body;

  try {
    const stopwatch = await Stopwatch.create({
      user,
      laps,
    });

    res.json({
      code: 200,
      data: stopwatch,
    });
  } catch (error) {
    console.log(error);
    res.json({
      code: 500,
      message: "Error al guardar los datos",
      data: {},
    });
  }
};

export const getLapsByUser = async (req: Request, res: Response) => {
    const { user } = req.params;
    
    try {
        const stopwatch = await Stopwatch.findAll({
        where: {
            user,
        },
        });
    
        res.json({
        code: 200,
        data: stopwatch,
        });
    } catch (error) {
        console.log(error);
        res.json({
        code: 500,
        message: "Error al obtener los datos",
        data: {},
        });
    }
    }
