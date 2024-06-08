import { Injectable, NotFoundException, HttpCode } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tasks.dto';


@Injectable()
export class TasksService {
  private tasks = [
    // {
    //   id: 1,
    //   description: 'Task 1',
    // },
    // {
    //   id: 2,
    //   description: 'Task 2',
    // },
    // {
    //   id: 3,
    //   description: 'Task 3',
    // },
    // {
    //   id: 4,
    //   description: 'Task 4',
    // },
  ];
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound =  this.tasks.find(task => task.id === id);
    return !taskFound ? new NotFoundException(`Task with id ${id} not found`)  : taskFound;
  }

  createTasks(task: CreateTaskDto) {
    console.log(task);
    //this.tasks.push(tasks);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTasks() {
    return 'actualizando tareas';
  }

  deleteTasks() {
    return 'Eliminando tarea';
  }

  updateTasksStatus() {
    return 'actualizando algo de la tarea';
  }
}
