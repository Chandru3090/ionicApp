import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNewsPage } from './sports-news.page';

describe('SportsNewsPage', () => {
  let component: SportsNewsPage;
  let fixture: ComponentFixture<SportsNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
