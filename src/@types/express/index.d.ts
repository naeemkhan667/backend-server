// import { Response } from 'express';

// // Define the shape of the options parameter for the error method
// interface ErrorOptions {
//   [key: string]: any; // Allow any additional properties
//   // statusCode is already handled by res.status()
// }

// declare global {
//   namespace Express {
//     interface Response {
//       /**
//        * Sends a success JSON response.
//        * @param data - The response payload.
//        * @param message - A success message.
//        * @param errorCode - Optional error code (though success usually doesn't have one).
//        */
//       success(data?: any | null, message?: string, errorCode?: string | null): this;

//       /**
//        * Sends an error JSON response.
//        * @param message - An error message.
//        * @param statusCode - The HTTP status code (defaults to 500).
//        * @param options - Additional properties to include in the JSON response (e.g., validation errors).
//        */
//       error(message?: string, statusCode?: number, options?: ErrorOptions): this;

//       // If you want to add the sendSuccess method later, you'd add its type here too:
//       // sendSuccess(params?: { data?: any | null; message?: string; statusCode?: number }): this;
//     }
//   }
// }

// types/express/index.d.ts
import "express";

declare module "express-serve-static-core" {
  interface Response {
    success: (data: any, message?: string) => void;
    error: (message: string, statusCode?: number, errors?: any) => void;
  }
}
