import { Injectable, NotFoundException, HttpCode } from '@nestjs/common';

export type TaskType = {
  id?: number;
  description: string;
};

@Injectable()
export class TasksService {
  private tasks: TaskType[] = [
    {
      id: 1,
      description: 'Task 1',
    },
    {
      id: 2,
      description: 'Task 2',
    },
    {
      id: 3,
      description: 'Task 3',
    },
    {
      id: 4,
      description: 'Task 4',
    },
  ];
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound =  this.tasks.find(task => task.id === id);
    return !taskFound ? new NotFoundException(`Task with id ${id} not found`)  : taskFound;
  }

  createTasks(tasks: TaskType) {
    console.log(tasks);
    //this.tasks.push(tasks);
    this.tasks.push({
      ...tasks,
      id: this.tasks.length + 1,
    });
    return tasks;
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
