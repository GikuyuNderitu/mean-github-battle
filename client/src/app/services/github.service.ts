import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  constructor(
    private _http:Http
  ) { }

  getUser(name) {
    return this._http.get(`https://api.github.com/users/${name}`)
    .map((response: Response) => response.json())
    .toPromise();
  }

}
