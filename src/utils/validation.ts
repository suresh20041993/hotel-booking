import { body, query, param } from 'express-validator';

export const validateHotelQuery = [
  query('location')
    .optional()
    .isString()
    .withMessage('Location must be a string'),
];

export const validateBooking = [
  body('hotelId')
    .isInt({ gt: 0 })
    .withMessage('Hotel ID must be a positive integer'),
  body('rooms')
    .isInt({ gt: 0 })
    .withMessage('Number of rooms must be a positive integer'),
  body('checkInDate')
    .isISO8601()
    .withMessage('Check-in date must be a valid date'),
  body('checkOutDate')
    .isISO8601()
    .withMessage('Check-out date must be a valid date'),
  body('checkOutDate')
    .custom((value, { req }) => {
      const checkInDate = new Date(req.body.checkInDate);
      const checkOutDate = new Date(value);
      if (checkOutDate <= checkInDate) {
        throw new Error('Check-out date must be after check-in date');
      }
      return true;
    }),
];

export const validateBookingId = [
  param('id').isInt({ gt: 0 }).withMessage('Booking ID must be a positive integer'),
];
