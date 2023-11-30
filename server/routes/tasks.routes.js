import { Router } from "express";
import {getTasks, createTasks, updateTask, getTask, deleteTasks} from '../controlers/tasks.controlers.js';


const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTasks);

export default router;