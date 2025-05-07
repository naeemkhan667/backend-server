"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const todo_model_1 = require("../models/todo.model");
const getTodos = async (req, res) => {
    const todos = await todo_model_1.TodoModel.find().sort({ createdAt: -1 });
    res.success([todos], 200, 'todo');
    //res.json({ success: true, data: todos });
};
exports.getTodos = getTodos;
const createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = new todo_model_1.TodoModel({ title });
    await todo.save();
    res.status(201).json({ success: true, data: todo });
};
exports.createTodo = createTodo;
const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const updated = await todo_model_1.TodoModel.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!updated) {
            res.status(404).json({ success: false, message: 'Todo not found' });
            return;
        }
        res.success([updated], 200, "Todo updated successfully");
        //res.json({ success: true, data: updated });
    }
    catch (err) {
        next(err);
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const deleted = await todo_model_1.TodoModel.findByIdAndDelete(id);
    if (!deleted) {
        res.status(404).json({ success: false, message: 'Todo not found' });
    }
    res.json({ success: true, data: deleted });
};
exports.deleteTodo = deleteTodo;
