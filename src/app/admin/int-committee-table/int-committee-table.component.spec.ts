import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCommitteeTableComponent } from './int-committee-table.component';

describe('IntCommitteeTableComponent', () => {
  let component: IntCommitteeTableComponent;
  let fixture: ComponentFixture<IntCommitteeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCommitteeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCommitteeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
