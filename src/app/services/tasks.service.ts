import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../model/task";

@Injectable()
export class TasksService {

    constructor() {
        this.tasksList = [
          {name: "Test", created: new Date ()},
          {name: "Test2", created: new Date ()}
        ]
        this.tasksListObs.next(this.tasksList);
    }
    
    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  
    add(task: Task) {
      this.tasksList.push(task);
      this.tasksListObs.next(this.tasksList);
    }
  
    remove(task: Task) {
      this.tasksList = this.tasksList.filter(e => e !== task);
      this.tasksListObs.next(this.tasksList);
    }
  
    done(task: Task) {
      this.tasksDone.push(task);
      this.remove(task);
      this.tasksDoneObs.next(this.tasksDone);
    }
  
    removedone(task: Task) {
      this.tasksDone = this.tasksDone.filter(e => e !== task);
      this.tasksDoneObs.next(this.tasksDone);
    }

    getTasksListObs(): Observable<Array<Task>>{
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>>{
        return this.tasksDoneObs.asObservable();
    }

}