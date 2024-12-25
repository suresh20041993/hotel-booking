import { Request, Response } from 'express';
import { readJSON, writeJSON } from '../config/db';

export const createBooking = (req: Request, res: Response) => {
  const bookings = readJSON('src/data/bookings.json');
  const newBooking = { id: Date.now(), ...req.body };
  bookings.push(newBooking);
  writeJSON('src/data/bookings.json', bookings);
  res.status(201).json(newBooking);
};

export const getBookings = (req: Request, res: Response) => {
  const bookings = readJSON('src/data/bookings.json');
  res.json(bookings);
};

export const updateBooking = (req: any, res: any) => {
  const bookings = readJSON('src/data/bookings.json');
  const { id } = req.params;
  const index = bookings.findIndex((b: any) => b.id == id);

  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...req.body };
    writeJSON('src/data/bookings.json', bookings);
    return res.json(bookings[index]);
  }

  res.status(404).json({ message: 'Booking not found' });
};

export const cancelBooking = (req: Request, res: Response) => {
  const bookings = readJSON('src/data/bookings.json');
  const { id } = req.params;
  const filteredBookings = bookings.filter((b: any) => b.id != id);
  writeJSON('src/data/bookings.json', filteredBookings);
  res.status(204).send();
};
