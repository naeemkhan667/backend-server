import { Request, Response, NextFunction } from 'express';
import TodoModel from '../models/todo.model';
import mongoose from 'mongoose';
import { SuccessResponse } from '../interfaces/response.interface';

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.error('Invalid ID format', 400);
            return;
        }

        const todo = await TodoModel.findById(id);
        if (!todo) {
            res.error('Todo not found', 404);
        }

        res.success([todo], 200, 'Todo list found');
    } catch (error) {
        console.error("Get Todo Error:", error);
        next(error);
    }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const todos = await TodoModel.find();
       res.success(todos, 200, "Todos fetched successfully");
    } catch (error) {
        console.error("Get All Todos Error:", error);
        next(error);
    }
};


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



export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.error("Invalid ID format", 400);
            return;
        }

        const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedTodo) {
            res.error("Todo not found", 404);
            return;
        }

        res.success([updatedTodo], 200, "Todo updated successfully");
    } catch (error) {
        console.error("Update Todo Error:", error);
        next(error);
    }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.error('Invalid ID format', 400);
            return;
        }

        const deleted = await TodoModel.findByIdAndDelete(id);
        if (!deleted) {
            res.error('Todo not found', 404);
            return
        }
        res.success([deleted], 200, "Todo deleted successfully");
    } catch (error) {
        console.error("Delete Todo Error:", error);
        next(error);
    }
};

