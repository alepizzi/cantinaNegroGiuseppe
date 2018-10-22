import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barbera',
  templateUrl: './barbera.component.html'
})
export class BarberaComponent implements OnInit {

  barbera = {
    'name': 'Barbera d\'Alba D.O.C. "Pulin"',
    'grape': 'Barbera',
    'ITFermentation': 'Fermentazione e macerazione in acciaio per circa 2 settimane ad una temperatura controllata di 28° C.; segue fermentazione malolattica in fusti di rovere da 500 litri.',
    'DEFermentation': 'Gärung und Maischung im Stahltank während ca. 2 Wochen bei kontrollierter Temperatur von 28 °C; anschliessend malolaktische Säureumwandlung in Eichenfässern von 500 Litern.',
    'ENFermentation': 'Fermentation and maceration in stainless steel tanks for 2 weeks at a controlled 28° C followed by malo-lactic fermentation in 500 litre oak casks.',
    'FRFermentation': 'Fermentation et macération en cuve d\'inox pendant environ 2 semaines à température contrôlée de 28°C; suivie d\'une fermetation malolactique en fût de chêne de 500 litres.',
    'ITAging': 'Circa 10-12 mesi in fusti di rovere da 500 litri e 2 mesi in bottiglia.',
    'DEAging': 'ca. 10-12 Monate in Eichenfässern von 500 Litern und 2 Monate in der Flasche.',
    'ENAging': 'Around 10-12 months in oak casks and 2 months in the bottle.',
    'FRAging': 'Environ 10-12 mois en fût de chêne de 500 litres et 2 mois en bouteille.',
    'ITCharacteristics1': 'Colore: rosso rubino intenso.',
    'DECharacteristics1': 'Farbe: rubinrot intensiv.',
    'ENCharacteristics1': 'Colour: intense ruby red.',
    'FRCharacteristics1': 'Robe: rouge rubis.',
    'ITCharacteristics2': 'Profumo: ampio, importante, con sentori di viola.',
    'DECharacteristics2': 'Bukett: vielschichtig, kräftig, Veilchenduft.',
    'ENCharacteristics2': 'Bouquet: intense, with hints of violets.',
    'FRCharacteristics2': 'Bouquet: ample, intense, aux senteurs de violette.',
    'ITCharacteristics3': 'Sapore: asciutto, di buon corpo e di giusta acidità, gusto pieno ed avvolgente.',
    'DECharacteristics3': 'Geschmack: trocken, harmonische Säure, gefällig, vollmundig.',
    'ENCharacteristics3': 'Flavour: dry, full bodied, with just the right acidity.',
    'FRCharacteristics3': 'Corps: vin sec, acidité équilibrée, corsé et plein en bouche.',
    'ITNotes': 'Adatto sia a primi piatti importanti che a salumi, secondi di carne e formaggi. È un vino che bene si presta anche a lunghi invecchiamenti. Temperatura di servizio 18-20° C.',
    'DENotes': 'Eignet sich als Begleiter zu Vorspeisen, Wurstwaren, Fleischgerichten und Käse. Kann viele Jahre gelagert werden. Trinktemperatur 18-20° C.',
    'ENNotes': 'Accompanies entire meal including meat and cheese. Suitable for longer aging. Serve at 18-20° C.',
    'FRNotes': 'Idéal tant avec les plats de pâtes qu\'avec saucissons, viandes et fromages. Se prête à un long vieillissement. Servir à 18-20° C.',
    'photo': 'assets/images/Wines/Barbera.png',
    'photo15': 'assets/images/Wines/Barbera_15.png',
    'photo3': 'assets/images/Wines/Barbera_3.png',
    'downloadPDF': 'assets/download/Barbera.pdf',
    'downloadZIP': 'assets/download/Barbera.zip',
    'format': [
      {
        'value': '0.75 l',
      },
      {
        'value': '1.5 l',
      },
      {
        'value': '3 l',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
