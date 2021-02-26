import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerwisModule } from '../serwis/serwis.module';
import { UzytkownikModule } from '../uzytkownik/uzytkownik.module'

 
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
  aktualny:UzytkownikModule;
  czyZalogowany;
  constructor(         
    private serwisModule: SerwisModule,
    private router: Router    
    ) { 
      let zalogowany = serwisModule.zalogowany(); 
      this.czyZalogowany = serwisModule.czyZalogowany;     
      this.aktualny =  new UzytkownikModule('', '', zalogowany?.imie, zalogowany?.nazwisko, zalogowany?.urodziny);      
    }
    ngOnInit(){
        if(!this.czyZalogowany){
          this.router.navigate(['/login']);
        }
    }
    wyloguj() {
      this.serwisModule.wyloguj();
      this.router.navigate(['/login']);
  }
  lista() {
    this.router.navigate(['/lista']);
} 
}


