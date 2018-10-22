import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { fade } from './../../animations';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  animations: [
    fade
  ]
})
export class ContactsComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '200610240719668',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
  }

  ngOnInit() {

  }

}
