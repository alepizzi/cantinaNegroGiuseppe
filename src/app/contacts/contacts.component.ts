import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  animations: [fade],
})
export class ContactsComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(
    private metaService: Meta,
    private titleService: Title

  ) {
      this.titleService.setTitle(`Cantina Negro Giuseppe: Contatti `);
      this.metaService.updateTag({ name: 'description', content: `Contatta la cantina Negro Giuseppe per richiedere informazioni sui nostri vini o prenotare una visita` });
      this.metaService.updateTag({ name: 'og:title', content: `Contatti` });
      this.metaService.updateTag({ name: 'og:description', content: `Contatta la cantina Negro Giuseppe per richiedere informazioni sui nostri vini o prenotare una visita` });
      this.metaService.updateTag({ name: 'twitter:title', content: `Contatti` });
      this.metaService.updateTag({ name: 'twitter:description', content: `Contatta la cantina Negro Giuseppe per richiedere informazioni sui nostri vini o prenotare una visita` });
  }
}
