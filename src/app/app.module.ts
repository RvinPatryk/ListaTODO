import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { SerwisModule } from './serwis/serwis.module';
import { TaskservicesModule } from './serwis/taskservices.module';
import { NameTransformPipe } from './shared/name-transform.pipe';
import { ListaComponent } from './lista/lista.component';
import { TaskTransformPipe } from './shared/task-transfrom.pipe';
import { DateDirective } from './shared/date.directive';
import { HttpService } from './serwis/http.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    RejestracjaComponent,
    NameTransformPipe,
    ListaComponent,
    TaskTransformPipe,
    DateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SerwisModule, TaskservicesModule, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
