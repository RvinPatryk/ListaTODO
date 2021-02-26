import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SerwisModule } from '../serwis/serwis.module';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css']
})
export class RejestracjaComponent {
  rejestracjaForm!: FormGroup;
  wiadomosc!:string;
 
  constructor(     
    private formBuilder: FormBuilder,
    private serwisModule: SerwisModule,
    private router: Router
    ) { }
 
  ngOnInit(): void {
      this.rejestracjaForm = this.formBuilder.group({
        imie: '',
        nazwisko: '',
        nazwa: '',
        haslo: '',
        urodziny: '', 
        email: '',
      });
    }
  
  onSubmit(): void {  
    this.wiadomosc = '';
    if(this.rejestracjaForm.value.nazwa.length == 0){
      this.wiadomosc = 'Wypełnij pole nazwa';
      return;
    } 
    if(this.rejestracjaForm.value.haslo.length == 0){
      this.wiadomosc = 'Wypełnij pole hasło';
      return;
    } 
    if(this.rejestracjaForm.value.imie.length == 0){
      this.wiadomosc = 'Wypełnij pole imię';
      return;
    } 
    if(this.rejestracjaForm.value.nazwisko.length == 0){
      this.wiadomosc = 'Wypełnij pole nazwisko';
      return;
    } 
    if(this.rejestracjaForm.value.email.length == 0){
      this.wiadomosc = 'Wypełnij pole email';
      return;
    }
 
    this.wiadomosc = this.serwisModule.rejestracja(this.rejestracjaForm.value.imie, 
      this.rejestracjaForm.value.nazwisko,
      this.rejestracjaForm.value.nazwa, 
      this.rejestracjaForm.value.haslo,
      this.rejestracjaForm.value.urodziny,
      this.rejestracjaForm.value.email
      );
      if (this.wiadomosc == ""){
          this.router.navigate(['/login']);
      }      
  }
}

