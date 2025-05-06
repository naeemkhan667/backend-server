import mongoose, { Schema, Document } from 'mongoose';
import { ITodo } from '../interfaces/todo.interface';

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update the updatedAt field on save
// TodoSchema.pre('save', function (next) {
//   this.updatedAt = new Date();
//   next();
// });

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;