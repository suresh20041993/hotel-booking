import express from 'express';
import {
  createBooking,
  getBookings,
  updateBooking,
  cancelBooking,
} from '../controllers/bookingController';
import {
  validateBooking,
  validateBookingId,
} from '../utils/validation';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

router.post('/', validateBooking, validateRequest, createBooking);
router.get('/', getBookings);
router.put('/:id', validateBookingId, validateBooking, validateRequest, updateBooking);
router.delete('/:id', validateBookingId, validateRequest, cancelBooking);

export default router;
