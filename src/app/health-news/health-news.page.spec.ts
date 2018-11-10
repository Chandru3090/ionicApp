import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNewsPage } from './health-news.page';

describe('HealthNewsPage', () => {
  let component: HealthNewsPage;
  let fixture: ComponentFixture<HealthNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
