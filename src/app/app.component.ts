import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CV } from './cv/cv';
import { CvDataService } from './cv-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cvData$: Observable<CV>;

  constructor(private cvDataService: CvDataService) { }

  ngOnInit() {
    this.cvData$ = this.cvDataService.getCvData().pipe(
      tap(data => console.log(data))
    );
  }
}
