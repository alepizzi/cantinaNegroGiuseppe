import { TranslateService } from '@ngx-translate/core';
import { Component, Output, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('cookieLaw')
  private cookieLawEl: any;

  public dismiss(): void {
    this.cookieLawEl.dismiss();
  }

  modalRef: BsModalRef;
  items: any[];

  constructor(private modalService: BsModalService, private fb: FacebookService) {
    this.items = Array(15).fill(0);
    const initParams: InitParams = {
      appId: '200610240719668',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
  }

  ngOnInit() {
  }

  openModalCookie(template: TemplateRef<any>) {
    this.cookieLawEl.dismiss();
    this.modalRef = this.modalService.show(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
