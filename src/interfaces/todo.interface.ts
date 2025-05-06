import { Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string; // Optional description
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}