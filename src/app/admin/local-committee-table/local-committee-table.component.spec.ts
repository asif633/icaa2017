import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCommitteeTableComponent } from './local-committee-table.component';

describe('LocalCommitteeTableComponent', () => {
  let component: LocalCommitteeTableComponent;
  let fixture: ComponentFixture<LocalCommitteeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCommitteeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCommitteeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
