import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  animations: [fade],
})
export class ContactsComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
