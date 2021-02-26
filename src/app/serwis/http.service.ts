import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    this.getTasks()
  }

  getTasks(){
    this.http.get('https://todo.go.pl/phppgadmin/redirect.php?subject=table&server=127.0.0.1%3A5432%3Aallow&database=todo&schema=public&table=tasks')
    .subscribe(tasks => {
      console.log(tasks);
    })
  }
}
