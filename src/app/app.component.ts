import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Top News',
      url: '/news-headlines',
      icon: 'home'
    },
    {
      title: 'General',
      url: '/general-news',
      icon: 'md-copy'
    },
    {
      title: 'Business',
      url: '/business-news',
      icon: 'md-briefcase'
    },
    {
      title: 'Health',
      url: '/health-news',
      icon: 'md-medkit'
    },
    {
      title: 'Science',
      url: '/science-news',
      icon: 'md-school'
    },
    {
      title: 'Technology',
      url: '/technology-news',
      icon: 'md-laptop'
    },
    {
      title: 'Sports',
      url: '/sports-news',
      icon: 'md-medal'
    },
    {
      title: 'Entertainments',
      url: '/entertainment-news',
      icon: 'logo-youtube'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'md-call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
