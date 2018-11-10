import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceNewsPage } from './science-news.page';

describe('ScienceNewsPage', () => {
  let component: ScienceNewsPage;
  let fixture: ComponentFixture<ScienceNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
