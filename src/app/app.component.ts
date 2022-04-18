import { NavController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  onLogout() {
    this.authService.logout();
    this.navCtrl.navigateBack('/auth');
  }
}
