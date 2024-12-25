import express from 'express';
import { listHotels } from '../controllers/hotelController';
import { validateHotelQuery } from '../utils/validation';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

router.get('/', validateHotelQuery, validateRequest, listHotels);

export default router;
