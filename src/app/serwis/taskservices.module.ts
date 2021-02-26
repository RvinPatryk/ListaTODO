import { NgModule, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../model/task";
import { HttpService } from './http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaskservicesModule {

  constructor(private httpService: HttpService) {
    const tasksList: Task[] = [
      
    ]
    this.tasksListObs.next(tasksList);
}




private tasksListObs = new BehaviorSubject<Array<Task>>([]);

add(task: Task) {

  const list = this.tasksListObs.getValue();
  list.push(task);
  this.tasksListObs.next(list);
}

remove(task: Task) {
  const list = this.tasksListObs.getValue().filter(e => e !== task);
  this.tasksListObs.next(list);
}

done(task: Task) {
task.created = new Date().toLocaleString();
 task.isDone = true;
 const list = this.tasksListObs.getValue();
 this.tasksListObs.next(list);
}

removedone(task: Task) {
  const list = this.tasksListObs.getValue().filter(e => e !== task);
  this.tasksListObs.next(list);
}

getTasksListObs(): Observable<Array<Task>>{
    return this.tasksListObs.asObservable();
}


edit(task: Task) {
  
}
 }
