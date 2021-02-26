import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { SerwisModule } from '../serwis/serwis.module';
import { TaskservicesModule } from '../serwis/taskservices.module';
import { UzytkownikModule } from '../uzytkownik/uzytkownik.module';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  newTask!: any;

  tasksDone: Array<Task> = [];

  showMe:boolean=false;

  tasksList: Array<Task> = [];
  aktualny!: UzytkownikModule;
  czyZalogowany!: boolean;

  constructor(private tasksService: TaskservicesModule,
    private serwisModule: SerwisModule,
    private router: Router) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
      this.tasksDone = tasks.filter(t => t.isDone ===true);
    });
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
      this.tasksList = tasks.filter(t => t.isDone ===false);
      let zalogowany = serwisModule.zalogowany(); 
      this.czyZalogowany = serwisModule.czyZalogowany;     
      this.aktualny =  new UzytkownikModule('', '', zalogowany?.imie, zalogowany?.nazwisko, zalogowany?.urodziny);
    });
   }

  ngOnInit(): void {
    if(!this.czyZalogowany){
      this.router.navigate(['/login']);
    }
  }

  add(){
    if (this.newTask === "") {
      
  }
  else {const task: Task =({id: null, name: this.newTask, created: new Date().toLocaleString(), isDone: false});
  this.tasksService.add(task);
  this.newTask = '';
  }
}

removedone(task: Task){
  this.tasksService.removedone(task);
}
toggleshow(){
  this.showMe=!this.showMe;
}

remove(task: Task){
  this.tasksService.remove(task);
}

done(task: Task){
  task.created = new Date().toLocaleString();
  this.tasksService.done(task);
}

edit(task: Task){
  this.tasksService.edit(task);
}




}
