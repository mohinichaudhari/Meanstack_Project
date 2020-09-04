import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStudComponent } from './report-stud.component';

describe('ReportStudComponent', () => {
  let component: ReportStudComponent;
  let fixture: ComponentFixture<ReportStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
