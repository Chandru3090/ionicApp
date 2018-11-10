import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsHeadlinesPage } from './news-headlines.page';

const routes: Routes = [
  {
    path: '',
    component: NewsHeadlinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsHeadlinesPage]
})
export class NewsHeadlinesPageModule {}
