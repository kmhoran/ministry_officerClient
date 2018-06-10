import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerMembershipComponent } from './officer-membership.component';

describe('OfficerMembershipComponent', () => {
  let component: OfficerMembershipComponent;
  let fixture: ComponentFixture<OfficerMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
