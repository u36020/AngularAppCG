import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService:AuthService){}
  title = 'AngularApp';
  logOut() {
    this.authService.logout();
  }
}
