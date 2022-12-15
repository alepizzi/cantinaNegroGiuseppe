import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  faPhone,
  faEnvelope,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faCircleXmark = faCircleXmark;
  cookieAllowed = false;
  items: any[];

  private subscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {
    translate.setDefaultLang('it');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    this.items = Array(15).fill(0);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        const locale = param['locale'];
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      }
    );

    this.cookieAllowed = Boolean(this.cookieService.get('cantinaNegroCookie'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  allowCookies() {
    this.cookieService.set('cantinaNegroCookie', 'true');
    this.cookieAllowed = true;
  }
}
