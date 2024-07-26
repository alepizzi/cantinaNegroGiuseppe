import { Component } from '@angular/core';
import { fade } from '../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  animations: [fade],
  styleUrls: ['./where.component.sass'],
})
export class WhereComponent {
  constructor(
    private metaService: Meta,
    private titleService: Title

  )  {
    this.titleService.setTitle(`Cantina Negro Giuseppe: Dove siamo `);
    this.metaService.updateTag({ name: 'description', content: `La cantina Negro Giuseppe si trova in Località Gallina, nel comune di Neive. Dista pochi chilometri da Alba ed è facilmente raggiungibile tramite l’autostrada A33, uscita Castagnito.` });
    this.metaService.updateTag({ name: 'og:title', content: `Dove siamo` });
    this.metaService.updateTag({ name: 'og:description', content: `La cantina Negro Giuseppe si trova in Località Gallina, nel comune di Neive. Dista pochi chilometri da Alba ed è facilmente raggiungibile tramite l’autostrada A33, uscita Castagnito.` });
    this.metaService.updateTag({ name: 'twitter:title', content: `Dove siamo` });
    this.metaService.updateTag({ name: 'twitter:description', content: `La cantina Negro Giuseppe si trova in Località Gallina, nel comune di Neive. Dista pochi chilometri da Alba ed è facilmente raggiungibile tramite l’autostrada A33, uscita Castagnito.` });
}
}
