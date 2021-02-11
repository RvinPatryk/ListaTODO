import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask!: string;
  tasksList: Array<string> = [];
  title: any;
  tasksDone: Array<string> = [];
  editTask: any;

  add(task: string) {
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  removedone(task: string) {
    this.tasksDone = this.tasksDone.filter(e => e !== task);
  }
    }
