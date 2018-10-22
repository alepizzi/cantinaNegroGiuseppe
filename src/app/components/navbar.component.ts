import { OnInit, OnDestroy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  toggleMenu = false;

  onToggleMenu() {
    this.scrollTop()
    if (this.toggleMenu === true) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
    }
  }

  scrollTop() {
    window.scroll(0, 0);
    document.body.scrollTop = 0;
  }

  private subscription: Subscription;

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    translate.setDefaultLang('it');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
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
