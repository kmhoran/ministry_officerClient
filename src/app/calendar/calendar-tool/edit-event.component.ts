import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  @Input() title: string;
  @Input() start: Date;
  @Input() end: Date;
  @Input() type: any;
  @Input() typeOptions: any[];
  constructor() { }


}
