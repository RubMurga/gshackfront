import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueTrackingComponent } from './unique-tracking.component';

describe('UniqueTrackingComponent', () => {
  let component: UniqueTrackingComponent;
  let fixture: ComponentFixture<UniqueTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
