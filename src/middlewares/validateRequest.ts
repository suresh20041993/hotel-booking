import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const validateRequest: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return; // Ensure no further execution happens after sending the response
  }

  next(); // Proceed to the next middleware or route handler
};
