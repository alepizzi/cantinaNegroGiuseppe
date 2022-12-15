import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../animations';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  animations: [fade],
  styleUrls: ['./tasting.component.sass'],
})
export class TastingComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
