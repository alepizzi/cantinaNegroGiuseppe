import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grappa',
  templateUrl: './grappa.component.html'
})
export class GrappaComponent implements OnInit {

  grappa = {
    'name': 'Grappa Monsú ',
    'grapeDebris': 'Nebbiolo',
    'ITDistillation': 'Sistema discontinuo.',
    'DEDistillation': 'mittels Destillierblase.',
    'ENDistillation': 'Discontinuous.',
    'FRDistillation': 'Discontinue.',
    'ITStill': 'Caldaiette in rame a vapore.',
    'DEStill': 'kleine Kupferdampfkessel.',
    'ENStill': 'Copper boiler.',
    'FRStill': 'Petites chaudières à vapeur en cuivre.',
    'ITAging': 'Circa 10-12 mesi in fusti di rovere da 225 litri.',
    'DEAging': 'ca. 10-12 Monate in Eichenfässern von 225 Litern.',
    'ENAging': 'Around 10-12 months in 225 litre oak casks.',
    'FRAging': 'Environ 10-12 mois en fût de chêne de 225 litres.',
    'ITCharacteristics1': 'Colore: ambrato.',
    'DECharacteristics1': 'Farbe: bernsteinfarben.',
    'ENCharacteristics1': 'Colour: amber.',
    'FRCharacteristics1': 'Couleur: ambrée.',
    'ITCharacteristics2': 'Profumo: ampio, avvolgente, con sentori di frutta matura quali marasca, albicocca, cacao e vaniglia.',
    'DECharacteristics2': 'Bukett: umfassend, mit Noten reifer Früchte wie Weichsel, Aprikose, Kakao und Vanille.',
    'ENCharacteristics2': 'Bouquet: abundant, penetrating with vanilla.',
    'FRCharacteristics2': 'Bouquet: ample, plein, aux senteurs de fruits matures comme la marasque, l\'abricot, le cacao et la vanilla.',
    'ITCharacteristics3': 'Sapore: forte ma vellutato, rotondo e armonico.',
    'DECharacteristics3': 'Geschmack: stark, samtig und rund, harmonisch.',
    'ENCharacteristics3': 'Flavour: strong, but velvety and rounded. Harmonious.',
    'FRCharacteristics3': 'Corps: fort mais velouteux, rond et harmonieux.',
    'ITNotes': 'Temperatura di servizio 18-20° C.',
    'DENotes': 'Trinktemperatur 18-20°C.',
    'ENNotes': 'Serve at 18-20° C.',
    'FRNotes': 'Servir à 18-20° C.',
    'photo': 'assets/images/Wines/grappa_monsu.jpg',
    'downloadPDF': 'assets/download/GrappaMonsu.pdf',
    'downloadZIP': 'assets/download/GrappaMonsu.zip'
  };

  constructor() { }

  ngOnInit() {
  }

}
