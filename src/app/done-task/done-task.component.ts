import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task> = [];
  

  constructor(private tasksService: TasksService) { 
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<Task>) =>{
      this.tasksDone = tasks;
    });
  }

  ngOnInit(): void {
  }

  removedone(task: Task){
    this.tasksService.removedone(task);
  }

}
