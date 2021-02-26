import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UzytkownikModule } from '../uzytkownik/uzytkownik.module'
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
 
export class SerwisModule {
  czyZalogowany: boolean = false;
  constructor() {
    this.czyZalogowany = this.zalogowany() != null;
  }
 
  uzytkownicy() {
    let u = localStorage.getItem('uzytkownicy');
    let uzytkownicy = [];
    if (u != null) {
      uzytkownicy = JSON.parse(u);
    }
    return uzytkownicy;
  }
 
  zalogowany() {
    let uzytkownicy: any[] = this.uzytkownicy();
    let uzytkownik = localStorage.getItem('aktualnyUzytkownik');
    let aktualny = uzytkownicy.find(u => u.nazwa == uzytkownik);
    if (aktualny != null) {
      this.czyZalogowany = true;
      return new UzytkownikModule(aktualny.nazwa, '', aktualny.imie, aktualny.nazwisko, aktualny.urodziny);
    }
    this.czyZalogowany = false;
    return null;
  }
 
  login(nazwa: string, haslo: string) {
    let uzytkownicy: any[] = this.uzytkownicy();
    let uzytkownik = uzytkownicy.find(u => u.nazwa == nazwa);
    if (uzytkownik != null && uzytkownik.haslo == haslo) {
      localStorage.setItem('aktualnyUzytkownik', nazwa);
      this.czyZalogowany = true;
      return true;
    }
    this.czyZalogowany = false;
    return false;
  }
  wyloguj() {
    this.czyZalogowany = false;
    localStorage.removeItem('aktualnyUzytkownik');
  }
 
  rejestracja(imie: string, nazwisko: string, nazwa: string, haslo: string, urodziny: Date, email: string) {
    let uzytkownicy: any[] = this.uzytkownicy();
    if (uzytkownicy.find(u => u.nazwa == nazwa) != null) {
      return "Użytkownik o takiej nazwie już istnieje!"
    }
    else {
      uzytkownicy.push(new UzytkownikModule(nazwa, haslo, imie, nazwisko, urodziny, email));
      localStorage.setItem('uzytkownicy', JSON.stringify(uzytkownicy));
      return "";
    }
  }
}
