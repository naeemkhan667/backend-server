import { Router } from 'express';
import {getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';
import { emailPasswordSchema} from '../validation-schemas/todo.schema';
import validateSchema from '../middlewares/validation.middleware';

//const router = Router();
const router: Router = Router();


router.get('/', getTodos);
router.post('/', validateSchema(emailPasswordSchema, 'body'), createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
