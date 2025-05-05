import { Request, Response, NextFunction } from 'express';
import { TodoModel } from '../models/todo.model';

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await TodoModel.find().sort({ createdAt: -1 });
        res.success(todos, 200, 'todo');
    } catch (err) {
        next(err);
    }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;
    try {
        const todo = new TodoModel({ title });
        await todo.save();
        res.success([todo], 201, "Todo created successfully");
    } catch (err) {
        next(err);
    }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    try {
        const updated = await TodoModel.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true }
        );

        if (!updated) {
            res.status(404).json({ success: false, message: 'Todo not found' });
            return;
        }
        res.success([updated], 200, "Todo updated successfully");
        //res.json({ success: true, data: updated });

    } catch (err) {
        next(err)
    }
};
export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleted = await TodoModel.findByIdAndDelete(id);

    if (!deleted) {
        res.status(404).json({ success: false, message: 'Todo not found' });
    }

    res.json({ success: true, data: deleted });
};
