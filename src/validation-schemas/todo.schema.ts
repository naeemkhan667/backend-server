import Joi from 'joi';

// Define the Joi schema for email and password validation
export const createTodoSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required',
  }),
  description: Joi.string().optional().messages({
    'string.empty': 'Description cannot be empty',
    'any.required': 'Description is required',
  }),
  completed: Joi.boolean().required().messages({
    'boolean.base': 'Completed must be a boolean value',
    'any.required': 'Completed is required',
  })
  
  // Add more properties as needed
});

export const updateTodoSchema = Joi.object({
    title: Joi.string().min(3).max(100).optional(),
    description: Joi.string().max(500).optional(),
    completed: Joi.boolean().optional(),
  }).or("title", "description", "completed"); // at least one required