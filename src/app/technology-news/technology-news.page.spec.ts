import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyNewsPage } from './technology-news.page';

describe('TechnologyNewsPage', () => {
  let component: TechnologyNewsPage;
  let fixture: ComponentFixture<TechnologyNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
