import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadlinesPage } from './news-headlines.page';

describe('NewsHeadlinesPage', () => {
  let component: NewsHeadlinesPage;
  let fixture: ComponentFixture<NewsHeadlinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHeadlinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHeadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
