import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email Legal';
  list: string[] = ['email1', 'email2', 'email3']
  isNewEmailOpen = false;


  toogleOpenNewEmail() {
    this.isNewEmailOpen = !this.isNewEmailOpen;
  }
}
