import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CV } from './cv/cv';
import { CvDataService } from './cv-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  cvData: CV;
  sub: Subscription;

  constructor(private cvDataService: CvDataService) { }

  ngOnInit() {
    this.sub = this.cvDataService.getCvData()
      .subscribe(data => this.cvData = data);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
