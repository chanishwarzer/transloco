import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLangComponent } from './chart-lang.component';

describe('ChartLangComponent', () => {
  let component: ChartLangComponent;
  let fixture: ComponentFixture<ChartLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
