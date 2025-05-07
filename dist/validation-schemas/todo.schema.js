"use strict";
// // src/schemas/auth.schema.ts
// import Joi from 'joi';
// // Define the Joi schema for email and password validation
// export const emailPasswordSchema = Joi.object({
//   email: Joi.string()
//     .email({ tlds: { allow: false } }) // Basic email format validation
//     .required()
//     .messages({ // Custom messages for better clarity
//       'string.empty': 'Email cannot be empty',
//       'string.email': 'Email must be a valid email address',
//       'any.required': 'Email is required',
//     }),
//   password: Joi.string()
//     .min(6) // Minimum password length
//     .required()
//     .messages({ // Custom messages for better clarity
//       'string.empty': 'Password cannot be empty',
//       'string.min': 'Password must be at least {#limit} characters long',
//       'any.required': 'Password is required',
//     }),
//   // You can add .strict() here if you want to disallow any other fields in the body
//   // .strict(),
// });
// // You can define other schemas in this file or other files in the schemas directory
// // export const anotherSchema = Joi.object({...});
