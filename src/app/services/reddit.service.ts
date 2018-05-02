import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://www.reddit.com/r';
  }

  getPosts(category, limit) {
    return this.http.get(`${this.baseUrl}/${category}/top.json?limit=${limit}`);
  }
}
