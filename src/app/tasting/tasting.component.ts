import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  animations: [fade],
  styleUrls: ['./tasting.component.sass'],
})
export class TastingComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor(
    private metaService: Meta,
    private titleService: Title

  ) {
         this.titleService.setTitle(`Cantina Negro Giuseppe: Degustazione `);
      this.metaService.updateTag({ name: 'description', content: `Scopri la degustazione della Cantina Negro Giuseppe, potrai assaporare i nostri migliori vini nell’antica cantinetta oppure sulla terrazza Monsú affacciata direttamente sulle vigne di produzione` });
      this.metaService.updateTag({ name: 'og:title', content: `Degustazione` });
      this.metaService.updateTag({ name: 'og:description', content: `Scopri la degustazione della Cantina Negro Giuseppe, potrai assaporare i nostri migliori vini nell’antica cantinetta oppure sulla terrazza Monsú affacciata direttamente sulle vigne di produzione` });
      this.metaService.updateTag({ name: 'twitter:title', content: `Degustazione` });
      this.metaService.updateTag({ name: 'twitter:description', content: `Scopri la degustazione della Cantina Negro Giuseppe, potrai assaporare i nostri migliori vini nell’antica cantinetta oppure sulla terrazza Monsú affacciata direttamente sulle vigne di produzione` });
  }
}
