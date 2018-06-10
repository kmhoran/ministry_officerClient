import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-membership',
  templateUrl: './user-membership.component.html',
  styleUrls: ['./user-membership.component.css']
})
export class UserMembershipComponent implements OnInit {

  users: any[] = [
    {
      name: 'Member One',
      email: 'email1@domain.com',
      emailVerified: true,
      isOfficer: false
    }, {
      name: 'Member Two',
      email: 'email2@domain.com',
      emailVerified: true
    }, {
      name: 'Member Three',
      email: 'email3@domain.com',
      emailVerified: false,
      isOfficer: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
