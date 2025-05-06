import { Schema, model, Document } from 'mongoose';
//import { Todo } from '../types/todo.type';
import {ITodo} from '../interfaces/todo.interface';


export interface ITodoDocument extends ITodo, Document  { };


const todoSchema = new Schema<ITodoDocument>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TodoModel = model<ITodoDocument>('Todo', todoSchema);
