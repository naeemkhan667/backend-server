import { Request, Response, NextFunction } from 'express';
import TodoModel from '../models/todo.model';
import mongoose from 'mongoose';

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        //return res.status(400).json({ success: false, message: "Invalid ID format" });
        res.error('Invalid ID format', 400);
        return;
      }
  
      const todo = await TodoModel.findById(id);
      if (!todo) {
        //return res.status(404).json({ success: false, message: "Todo not found" });
        res.error('Todo not found', 404);
      }
  
      //return res.json({ success: true, data: todo });
      res.success( [todo], 200, 'Todo list found');
    } catch (error) {
      console.error("Get Todo Error:", error);
      next(error);
      //return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };

  export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await TodoModel.find();
      res.success(todos, 200, "Todos fetched successfully");
      //return res.json({ success: true, data: todos });
    } catch (error) {
      console.error("Get All Todos Error:", error);
      next(error);
      //return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
// export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const todos = await TodoModel.find().sort({ createdAt: -1 });
//         res.success(todos, 200, "Todos fetched successfully");
//     } catch (err) {
//         next(err);
//     }
// };

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todo = new TodoModel(req.body);
      const savedTodo = await todo.save();
      res.success([savedTodo], 201, "Todo created successfully");

    } catch (error) {
      console.error("Create Todo Error:", error);
      next(error);
    }
  };

// export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
//     const { title } = req.body;
//     try {
//         const todo = new TodoModel({ title });
//         await todo.save();
//         res.success([todo], 201, "Todo created successfully");
//     } catch (err) {
//         next(err);
//     }
// };

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        //return res.status(400).json({ success: false, message: "Invalid ID format" });
        res.error("Invalid ID format", 400);
        return;
      }
  
      const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedTodo) {
        //return res.status(404).json({ success: false, message: "Todo not found" });
        res.error("Todo not found", 404);
        return;
      }
  
      //return res.json({ success: true, data: updatedTodo });
      res.success([updatedTodo], 200, "Todo updated successfully");
    } catch (error) {
      console.error("Update Todo Error:", error);
      //return res.status(500).json({ success: false, message: "Internal Server Error" });
      next(error);
    }
  };
// export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     const { title, completed } = req.body;

//     try {
//         const updated = await TodoModel.findByIdAndUpdate(
//             id,
//             { title, completed },
//             { new: true }
//         );

//         if (!updated) {
//             res.status(404).json({ success: false, message: 'Todo not found' });
//             return;
//         }
//         res.success([updated], 200, "Todo updated successfully");
//         //res.json({ success: true, data: updated });

//     } catch (err) {
//         next(err)
//     }
// };



export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        //return res.status(400).json({ success: false, message: "Invalid ID format" });
        res.error('Invalid ID format', 400);
        return;
      }
  
      const deleted = await TodoModel.findByIdAndDelete(id);
      if (!deleted) {
        //return res.status(404).json({ success: false, message: "Todo not found" });
        res.error('Todo not found', 404);
        return
      }
        res.success([deleted], 200, "Todo deleted successfully");
      //return res.json({ success: true, message: "Todo deleted successfully" });
    } catch (error) {
      console.error("Delete Todo Error:", error);
      next(error);
      //return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
// export const deleteTodo = async (req: Request, res: Response) => {
//     const { id } = req.params;

//     const deleted = await TodoModel.findByIdAndDelete(id);

//     if (!deleted) {
//         res.status(404).json({ success: false, message: 'Todo not found' });
//     }

//     res.json({ success: true, data: deleted });
// };
