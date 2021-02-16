import { Component, OnInit,} from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) { 
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
      this.tasksList = tasks;
    });
  }

  ngOnInit(): void {
  }

  remove(task: Task){
    this.tasksService.remove(task);
  }

  done(task: Task){
    task.end = new Date();
    this.tasksService.done(task);
  }

  edit(task: Task){
    this.tasksService.edit(task);
  }
}
