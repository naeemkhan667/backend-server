// import { Request, Response, NextFunction } from 'express';

// // The augmentation in src/@types/express/index.d.ts makes the
// // success and error methods available on the Response type here.

// const responseMiddleware = (req: Request, res: Response, next: NextFunction): void => {
//   res.success = (data = null, message = 'Success', errorCode = null): Response => {
//     return res.status(200).json({
//       success: true,
//       message,
//       data,
//       errorCode,
//     });
//   };

//   res.error = (message = 'Something went wrong', statusCode = 500, options = {}): Response => {
//     return res.status(statusCode).json({
//       success: false,
//       message,
//       ...options, // Spread the options object into the response body
//     });
//   };

//   next();
// };

// export default responseMiddleware;

// middlewares/responseHandler.ts
import { Request, Response, NextFunction } from "express";

const responseHandler = (req: Request, res: Response, next: NextFunction) : void => {
  res.success = (data, message = "Success") => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };

  res.error = (message, statusCode = 400, errors = null): Response => {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  };

  next();
};

export default responseHandler;
