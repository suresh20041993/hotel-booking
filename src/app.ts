import express from 'express';
import dotenv from 'dotenv';
import hotelRoutes from './routes/hotelRoutes';
import bookingRoutes from './routes/bookingRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/hotels', hotelRoutes);
app.use('/bookings', bookingRoutes);

// Error Handler
app.use(errorHandler);

export default app;
