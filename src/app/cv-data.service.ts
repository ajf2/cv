import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CV } from './cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor(private http: HttpClient) { }

  getCvData(): Observable<CV> {
    return this.http.get<CV>('../data.json');
  }

}
