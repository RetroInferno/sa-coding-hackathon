import { Component, OnInit } from '@angular/core';
import { RegistrationInfo } from 'src/app/interfaces/types';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userInfo: RegistrationInfo = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  confirmPass = '';
  errMsg: string | undefined;

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  register() {
    this.errMsg = '';
    if (this.userInfo.password !== this.confirmPass)
      this.errMsg = 'passwords do not match';
    else
      this.api.registerUser(this.userInfo).subscribe({
        next: (data) => {
          console.log(data);
          if (data.success === true) {
            window.alert(data.message);
            window.location.assign('#/login');
          }
        },
      });
  }
}
