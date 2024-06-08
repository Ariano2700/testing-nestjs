import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskType, TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  //   tasksService: TasksService;

  //   constructor(tasksService: TasksService) {
  //     this.tasksService = tasksService;
  //   }
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param("id") id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() tasks: TaskType) {
    return this.tasksService.createTasks(tasks);
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTasks();
  }

  @Delete()
  DeleteTask() {
    return this.tasksService.deleteTasks();
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return this.tasksService.updateTasksStatus();
  }

  // @Get("/tasks")
  // getAllTasks(){
  //     return "Obteniendo todas las putas tareas"
  // }
  // @Get("/")
  // index(){
  //     return {"message": "Que quieres oe reconchala"}
  // }
}
