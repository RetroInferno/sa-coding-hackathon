import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatastoreService } from '../services/datastore.service';
import { PushNotifyService } from '../services/push-notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userInfo: any = {
    username: '',
    password: '',
  };
  constructor(
    private api: ApiService,
    private dataStore: DatastoreService,
    private notify: PushNotifyService
  ) {}

  ngOnInit(): void {}

  login() {
    this.api
      .login(this.userInfo)
      .pipe()
      .subscribe({
        next: (userLogin) => {
          console.log(userLogin);
          if (userLogin.authenticated === true) {
            this.dataStore.user = userLogin;
            sessionStorage.setItem('role', 'FACILITATOR');
            window.location.assign('#/facilitator-home');
            this.notify.pushNotify({
              title: 'Welcome!',
              body: `You're logged in as ${this.dataStore.user.firstName} ${this.dataStore.user.lastName}`,
            });
          } else {
            window.alert('Incorrect Login Information');
          }
        },
      });
  }
}
