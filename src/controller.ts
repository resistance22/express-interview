import type { Request, Response } from 'express';


export const controller = (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
}