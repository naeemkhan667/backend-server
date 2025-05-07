"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error on the server side
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const details = process.env.NODE_ENV === 'production' ? undefined : err.stack; // Avoid leaking stack trace in production
    // Check if headers have already been sent. If so, delegate to the default Express error handler.
    if (res.headersSent) {
        return next(err);
    }
    return res.status(statusCode).json({
        success: 'false',
        message,
        details,
        errorCode: statusCode,
    });
};
exports.default = errorHandler;
