import Joi from 'joi';

// Define the Joi schema for email and password validation
export const todoAddSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required',
  }),
  completed: Joi.boolean().required().messages({
    'boolean.base': 'Completed must be a boolean value',
    'any.required': 'Completed is required',
  })
  
  // Add more properties as needed
});

export const todoUpdateSchema = Joi.object({
  title: Joi.string().optional(),
  completed: Joi.boolean().optional(),
});