import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {
  Assignment,
  Batch,
  CalEvent,
  User,
  UserInfo,
} from '../interfaces/apiDataTypes';
import { PushNotifyService } from './push-notify.service';

@Injectable({
  providedIn: 'root',
})
export class DatastoreService {
  constructor(private api: ApiService, private notify: PushNotifyService) {}
  private userInfo: UserInfo = { authenticated: false };

  get user() {
    const info = Object.assign({}, this.userInfo);
    delete info.authenticated;
    delete info.role;
    return this.userInfo;
  }

  set user(userObj: UserInfo) {
    this.userInfo = userObj;
  }

  public logOut = () => {
    this.userInfo = { authenticated: false };
    sessionStorage.clear();
    this.notify.pushNotify({
      title: 'Log Out Success',
      body: 'Come Back Soon!',
    });
  };

  /** Student Data*/
  public myAssignments: Assignment[] = [];
  public myBatch: Batch = {
    id: '',
    name: '',
    facilitatorId: '',
  };
  public myGrade: number | undefined;

  /**  Facilitator Data  */
  public myLearners: User[] = [];
  public myBatches: Batch[] = [];

  /** All Users */
  public events: CalEvent[] = [];
  // combines events and Assignments

  public dataFormat(array: any[]) {
    //  array.map(row => )
  }
}
