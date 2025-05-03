import { Schema, model } from 'mongoose';
import { Todo } from '../types/todo.type';

const todoSchema = new Schema<Todo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TodoModel = model<Todo>('Todo', todoSchema);
