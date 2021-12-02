import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showUsers:boolean = false;

  toggleUsersList() {
    this.showUsers = !this.showUsers;
  }
}
