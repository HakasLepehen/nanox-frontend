import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerTableComponent } from './programmer-table.component';

describe('ProgrammerTableComponent', () => {
  let component: ProgrammerTableComponent;
  let fixture: ComponentFixture<ProgrammerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
