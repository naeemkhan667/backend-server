import { Router } from 'express';
import todoRoutes from "./routes/todo.routes";

//const router = Router();
const router: Router = Router();


router.use('/todos', todoRoutes);


export default router;
