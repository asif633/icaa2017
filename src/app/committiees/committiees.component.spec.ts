import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittieesComponent } from './committiees.component';

describe('CommittieesComponent', () => {
  let component: CommittieesComponent;
  let fixture: ComponentFixture<CommittieesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommittieesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommittieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
