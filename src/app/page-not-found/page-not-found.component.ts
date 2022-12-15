import { Component } from '@angular/core';
import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass'],
})
export class PageNotFoundComponent {
  faFaceDizzy = faFaceDizzy;
}
