import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: 'draft-7', // Send RateLimit headers in standard format
  legacyHeaders: false, // Disable legacy headers
  handler: (req: Request, res: Response) => {
    res.error('Too many requests, please try again later.', 429);
  },
});

export default apiLimiter;
