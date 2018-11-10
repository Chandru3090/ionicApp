import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.page.html',
  styleUrls: ['./entertainment-news.page.scss'],
})
export class EntertainmentNewsPage implements OnInit {

  constructor(private newsService: NewsService, private router: Router) { }
  headLines = [];
  page = 1;
  totalRecord = 0;
  ngOnInit() {
    this.getNews();
  }
  toGetFullNews(currentArticle: any) {
    this.newsService.currentArticle = currentArticle;
    this.router.navigate(['./news-single']);
  }

  loadMoreNews(event) {
    this.page++;
    if (this.totalRecord >= this.page) {
      this.getNews();
    } else {
      event.target.disabled = true;
    }
  }

  getNews() {
    this.newsService.getNewsData('top-headlines', this.page, 'entertainment').subscribe(data => {
      if (data) {
        this.totalRecord = data['totalResults'];
        for (const article of data['articles']) {
          this.headLines.push(article);
        }
      }
    });
  }
}