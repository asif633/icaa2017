import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenaryTableComponent } from './plenary-table.component';

describe('PlenaryTableComponent', () => {
  let component: PlenaryTableComponent;
  let fixture: ComponentFixture<PlenaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlenaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlenaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
