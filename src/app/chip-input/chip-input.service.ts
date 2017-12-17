import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChipInputService {

  private url = `https://swapi.co/api/people`;

  constructor(private http: Http) { }

  getEntities(searchKeyWord): Observable<Object[]> {
    return this.http.get(`${this.url}/?search=${searchKeyWord}`)
      .map((response: Response) => response.json());
  }

}
