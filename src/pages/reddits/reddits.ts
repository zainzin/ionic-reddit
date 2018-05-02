import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage implements OnInit {
  items: [{}];
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit() {
    this.getDefaults();
    this.getPosts(this.category, this.limit);
  }

  getDefaults() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe((posts) => {
      this.items = posts['data'].children;
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {item});
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }
}
