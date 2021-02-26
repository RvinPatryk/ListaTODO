export class UzytkownikModule {
  imie!: any;
  nazwisko!: any;
  email!: any;
  haslo: string;
  nazwa: string;
  urodziny: Date;
  wiek() {
    let roznica = Date.now() - new Date(this.urodziny).getTime();
    if (roznica > 0){
      return Math.floor((roznica / (1000 * 3600 * 24))/365);
    }
    return 0;
  }
 
  constructor(nazwa:string, haslo:string, imie?: string, nazwisko?: string, urodziny?: Date, email?: string) {
      this.nazwa = nazwa;
      this.email = email;
      this.haslo = haslo;
      this.imie = imie;
      this.nazwisko = nazwisko;
      this.urodziny = urodziny ?? new Date(31,12,2999);
      
  }
}

