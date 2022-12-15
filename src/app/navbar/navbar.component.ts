import { OnInit, OnDestroy, Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  toggleMenu = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {
    translate.setDefaultLang('it');
  }

  onToggleMenu() {
    this.scrollTop();
    let element: HTMLElement = document.getElementsByClassName(
      'navbar-toggler'
    )[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }

    if (this.toggleMenu === true) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  scrollTop() {
    window.scroll(0, 0);
    document.body.scrollTop = 0;
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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
