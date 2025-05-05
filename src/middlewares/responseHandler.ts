// import { Request, Response, NextFunction } from 'express';
// import { SuccessResponse, ErrorResponse } from '../interfaces/response.interface.ts';

// export const responseHandler = (req: Request, res: Response, next: NextFunction): void => {


//     res.success = <T: any>(data: T, statusCode: number = 200, message: string = 'Success'): Response<SuccessResponse<T>> => {

//         res.status(statusCode).json({
//             status: 'success',
//             message,
//             data
//         });
//     }

//     res.error = (message: string = 'Error', statusCode: number = 500, details: any = null): Response<ErrorResponse> => {
//         res.status(statusCode).json({
//             status: 'error',
//             message,
//             details
//         });
//     }



// };
