import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfHour,
  endOfHour,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { modalConfigDefaults } from 'ngx-bootstrap/modal/modal-options.class';
import { DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR } from './date-picker.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

const allEventTypes: any[] = [
  {
    eventTypeId: 0,
    name: 'Meeting'
  }, {
    eventTypeId: 1,
    name: 'Assignment'
  }
];

const today = new Date();

@Component({
  selector: 'app-month-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent implements OnInit {
  // @ViewChild('modalContent') modalContent: TemplateRef<any>

  view = 'month';

  viewDate: Date = new Date();

  aNumber: number;

  eventTypes: any = allEventTypes;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event );
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: startOfHour(today),
      end: endOfHour(today),
      title: 'sample event',
      color: colors.blue,
      actions: this.actions
    }
  ];

  activeDayIsOpen = true;

  constructor() { }
  ngOnInit() { }

  dayClicked({date, events}: {date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
    }
  }
  eventTimeChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('event: ', event);
    console.log('action: ', action);
  }

  addEvent(): void {
    this.events.push({
      title: 'New Event',
      start: startOfHour(addHours(today, 1)),
      end: endOfHour(addHours(today, 1)),
      color: colors.blue,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
