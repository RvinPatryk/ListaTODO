import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SerwisModule } from '../serwis/serwis.module';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {  
  loginForm!: FormGroup;
  wiadomosc!:string;
 
  constructor(     
    private formBuilder: FormBuilder,
    private serwisModule: SerwisModule,
    private router: Router
    ) { }
 
  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        nazwa: '',
        haslo: '',
      });
    }
  
  onSubmit(): void { 
    if(this.loginForm.value.nazwa.length == 0){
      this.wiadomosc = 'Wypełnij pole nazwa';
      return;
    } 
    if(this.loginForm.value.haslo.length == 0){
      this.wiadomosc = 'Wypełnij pole hasło';
      return;
    } 
    var zalogowany = this.serwisModule.login(this.loginForm.value.nazwa, this.loginForm.value.haslo);
    if (zalogowany){
      this.wiadomosc = '';
      this.router.navigate(['/']);
    }
    else {
      this.wiadomosc = 'Błędna nazwa lub hasło';
    }
  }
}

