import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news-headlines',
    pathMatch: 'full'
  },
  {
    path: 'news-headlines',
    loadChildren: './news-headlines/news-headlines.module#NewsHeadlinesPageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'business-news', loadChildren: './business-news/business-news.module#BusinessNewsPageModule' },
  { path: 'general-news', loadChildren: './general-news/general-news.module#GeneralNewsPageModule' },
  { path: 'entertainment-news', loadChildren: './entertainment-news/entertainment-news.module#EntertainmentNewsPageModule' },
  { path: 'health-news', loadChildren: './health-news/health-news.module#HealthNewsPageModule' },
  { path: 'science-news', loadChildren: './science-news/science-news.module#ScienceNewsPageModule' },
  { path: 'sports-news', loadChildren: './sports-news/sports-news.module#SportsNewsPageModule' },
  { path: 'technology-news', loadChildren: './technology-news/technology-news.module#TechnologyNewsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
