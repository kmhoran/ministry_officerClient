import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from './imenu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isNavCollapsed = true;
  menu: IMenu;
  menuOptions: IMenu[] = [
    {
    id: 'calendar',
    name: 'Calendar',
    pages: [
      {
        id: 'calendar',
        name: 'Calendar',
        url: '/calendar'
      }
    ]
  }, {
    id: 'membership',
    name: 'Membership',
    pages: [
      {
        id: 'user-membership',
        name: 'Users',
        url: '/membership/user'
      },
      {
        id: 'officer-membership',
        name: 'Officers',
        url: '/membership/officer'
      }
    ]
  }
];

  subdomain: any;

  @Input() domain: string;
  @Input() page: string;

  constructor() { }

  ngOnInit() {
    this.menu = null;
    for (let i = 0; i < this.menuOptions.length; i++) {
      if (this.menuOptions[i].id === this.domain) {
        this.menu = this.menuOptions[i];
        console.log('menu: ', this.menu);
        break;
      }
    }
    if (!this.menu) {
      console.log('no menu: ', this.domain);
    }
  }

  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeNavCollapse(): void {
    this.isNavCollapsed = true;
  }

}
