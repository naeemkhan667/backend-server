import { Router } from 'express';
import {getAll, create, update, remove, getOne } from '../controllers/todo.controller';
import { createTodoSchema, updateTodoSchema } from '../validation-schemas/todo.schema';
import validateSchema from '../middlewares/validation.middleware';

//const router = Router();
const router: Router = Router();


router.get('/', getAll);
router.get("/:id", getOne);
router.post('/', validateSchema(createTodoSchema), create);
router.put('/:id', validateSchema(updateTodoSchema), update);
router.delete('/:id', remove);

export default router;
