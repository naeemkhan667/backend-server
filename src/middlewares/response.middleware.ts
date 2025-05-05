import { Request, Response, NextFunction } from 'express';
import { SuccessResponse, ErrorResponse } from '../interfaces/response.interface';

const responseHandler = (req: Request, res: Response, next: NextFunction): void => {


    res.success = <T>(data: T, statusCode: number = 200, message: string = 'Success'): Response<SuccessResponse<T>> => {

        return res.status(statusCode).json({
            status: 'success',
            message,
            data
        });
    }

    res.error = (message: string = 'Error', statusCode: number = 500, details: any = null): Response<ErrorResponse> => {
        return res.status(statusCode).json({
            status: 'error',
            message,
            details
        });
    }



};

export default responseHandler;