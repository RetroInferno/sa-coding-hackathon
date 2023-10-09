import { Component, OnInit } from '@angular/core';
import { Aside } from '../../services/aside.service';
import { DatastoreService } from 'src/app/services/datastore.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavbarOpen = true;
  toggleAccount = false;
  constructor(public aside: Aside, public dataStore: DatastoreService) {
    this.isNavbarOpen = aside.getToggleAside();
  }

  ngOnInit(): void {}

  toggleAside() {
    this.aside.setToggleAside(true);
  }

  setToggleAccount() {
    this.toggleAccount = !this.toggleAccount;
  }
}
