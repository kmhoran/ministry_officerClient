import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  svdpLogo = environment.svpdLogo;
  isNavCollapsed = true;

  constructor() {}
  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeMenuCollapse(): void {
    this.isNavCollapsed = true;
  }
}
