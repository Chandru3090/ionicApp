import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.page.html',
  styleUrls: ['./news-headlines.page.scss'],
})
export class NewsHeadlinesPage implements OnInit {

  constructor(private newsService: NewsService, private router: Router) { }
  headLines = [];
  page= 1;
  totalRecord= 0;
  ngOnInit() {
    this.getNews();
  }
  toGetFullNews(currentArticle: any) {
    this.newsService.currentArticle = currentArticle;
    this.router.navigate(['./news-single']);
  }

  loadMoreNews(event) {
    this.page++;
    if(this.totalRecord >= this.page){
      this.getNews();
    } else {
      event.target.disabled = true;
    }
  }

  getNews() {
    this.newsService.getNewsData('top-headlines', this.page).subscribe(data => {
      if (data) {
        this.totalRecord = data['totalResults'];
        for (const article of data['articles']) {
          this.headLines.push(article);
        }
      }
    });
  }
}
