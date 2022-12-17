import { Request, Response } from 'express';
import { Error, PipelineStage } from 'mongoose';

import Gear from '../../models/gear';

class GearList {
  public static async getGearLists(req: Request, res: Response) {
    try {
      const response = await Gear.find();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default GearList;
