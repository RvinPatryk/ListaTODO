import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  newTask!: string;


  constructor(private tasksService: TasksService) {

   }

  ngOnInit(): void {
  }

  add(){
    const task: Task =({id: null, name: this.newTask, created: new Date(), isDone: false});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
