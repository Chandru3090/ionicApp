import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  news: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    if(this.newsService.currentArticle) {
      this.news = this.newsService.currentArticle;
    } else {
      this.router.navigate(['../']);
    }
    
  }

}
