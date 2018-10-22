import { Component, OnInit } from '@angular/core';
import { fade } from './../../animations';
@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  animations: [
    fade
  ]
})
export class WhereComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
