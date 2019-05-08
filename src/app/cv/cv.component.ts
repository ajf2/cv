import { Component, Input, OnInit } from '@angular/core';
import { CV } from './cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  @Input()
  cvData: CV;

  constructor() { }

  ngOnInit() {
  }

}
