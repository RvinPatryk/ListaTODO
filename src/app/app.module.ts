import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TaskTransformPipe } from './shared/task-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TaskTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
