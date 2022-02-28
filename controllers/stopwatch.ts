import { Request, Response } from "express";
import User from "../models/stopwatch";

export const postLaps = async (req: Request, res: Response) => {
  const { name, laps } = req.body;
  console.log(name, laps);
  try {
    const stopwatch = await User.create({
      name,
      laps,
    });

    res.status(200).json({
      code: 200,
      data: stopwatch,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "Error al guardar los datos",
      data: {},
    });
  }
};

export const getLapsByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
        const stopwatch = await User.findAll({
        where: {
            name,
        },
        });
    
        res.status(200).json({
            code: 200,
        data: stopwatch,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        code: 500,
        message: "Error al obtener los datos",
        data: {},
        });
    }
    }
