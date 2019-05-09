import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;
  @Input() nameSuffix: string;
  @Input() jobTitle: string;

  constructor() { }

  ngOnInit() {
  }

}