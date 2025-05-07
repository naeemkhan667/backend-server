"use strict";
// // src/middleware/validateSchema.ts
// import { Request, Response, NextFunction } from 'express';
// import Joi from 'joi';
// import { ValidationErrorDetail } from '../interfaces/response.interface'; // Assuming this interface is defined
// // Define a type for the parts of the request we can validate
// type ValidationSource = 'body' | 'query' | 'params';
// /**
//  * Generic middleware to validate a specific part of the request (body, query, or params)
//  * against a provided Joi schema. If validation fails, it sends a standardized
//  * error response using res.error.
//  *
//  * @param schema - The Joi schema to validate against.
//  * @param source - The part of the request to validate ('body', 'query', or 'params').
//  * @returns An Express middleware function.
//  */
// const validateSchema = (schema: Joi.ObjectSchema, source: ValidationSource) => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     // Validate the specified source of the request against the schema
//     const { error, value } = schema.validate(req[source], {
//       abortEarly: false, // Collect all validation errors
//       stripUnknown: true, // Remove any unknown fields from the validated data
//     });
//     if (error) {
//       // If validation fails, format the Joi errors into a standardized structure
//       const validationErrors: ValidationErrorDetail[] = error.details.map(detail => ({
//         field: detail.path.join('.'), // Get the field path (e.g., 'email', 'address.city')
//         message: detail.message, // Joi's default or custom error message
//         type: detail.type, // Joi's error type (e.g., 'string.empty')
//       }));
//       // Use the res.error function to send the standardized error response
//       // Assuming res.error is available due to responseHandler middleware
//       return res.error('Validation failed', 400, validationErrors); // Send 400 Bad Request with validation details
//     }
//     // If validation passes, replace the original request data with the validated data
//     // This ensures only the expected fields are present and correctly typed
//     req[source] = value;
//     // Proceed to the next middleware or route handler
//     next();
//   };
// };
// export default validateSchema;
