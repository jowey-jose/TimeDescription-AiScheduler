import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAvailabilityComponent } from './person-availability.component';

describe('PersonAvailabilityComponent', () => {
  let component: PersonAvailabilityComponent;
  let fixture: ComponentFixture<PersonAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
