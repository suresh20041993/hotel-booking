import { RequestHandler } from 'express';
import { readJSON } from '../config/db';

export const listHotels: RequestHandler = (req, res, next) => {
  try {
    const hotels = readJSON('src/data/hotels.json');
    const location = req.query.location as string | undefined;

    const filteredHotels = location
      ? hotels.filter((hotel: any) =>
          hotel.location.toLowerCase() === location.toLowerCase()
        )
      : hotels;
    
    res.status(200).json(filteredHotels); 
  } catch (error) {
    next(error); 
  }
};
