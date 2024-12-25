import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // Log the error (optional)
  res.status(500).json({ message: err.message || 'Internal Server Error' });
};
