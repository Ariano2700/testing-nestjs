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
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
  //   tasksService: TasksService;

  //   constructor(tasksService: TasksService) {
  //     this.tasksService = tasksService;
  //   }
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({summary:"Get all tasks"})
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({summary:"Get task by id"})
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({summary:"Create a tasks"})
  createTask(@Body() tasks: CreateTaskDto) {
    return this.tasksService.createTasks(tasks);
  }

  @Put()
  @ApiOperation({summary:"Update a task"})
  updateTask() {
    return this.tasksService.updateTasks();
  }

  @Delete()
  @ApiOperation({summary:"Delete a task"})
  DeleteTask() {
    return this.tasksService.deleteTasks();
  }

  @Patch('/tasks')
  @ApiOperation({summary:"Update status of a tasks"})
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
