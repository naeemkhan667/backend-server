"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseHandler = (req, res, next) => {
    res.success = (data, statusCode = 200, message = 'Success') => {
        return res.status(statusCode).json({
            status: 'success',
            message,
            data
        });
    };
    res.error = (message = 'Error', statusCode = 500, details = null) => {
        return res.status(statusCode).json({
            status: 'error',
            message,
            details
        });
    };
};
exports.default = responseHandler;
